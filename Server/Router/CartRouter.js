const express = require('express');
const router = express.Router();
const multer = require('multer');
const CartSchema = require('../Model/CartSchema');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/src/Images');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/uploadcart', upload.single('image'), async (req, res) => {
  console.log('reqbody carts', req.body);
  const { image, productname, offerprice, userid } = req.body;
  console.log('from backendss',image, productname, offerprice, userid);
  try {
    if (!image || !productname || !offerprice) {
      return res.status(400).json({ error: "Required fields are missing" });
    }
    await CartSchema.create({
      image,
      productname,
      offerprice,
      userid
    });
    console.log('okeysss');
    res.json({ status: "okey" });
  } catch (error) {
    res.json({ status: error });
  }
});

router.get('/getproduct', async (req, res) => {
  const { Userid } = req.query; // Use query parameter instead of path parameter
  try {
    const products = await CartSchema.find({ userid: Userid }); // Adjust the query to find by user ID
    res.json(products);
  } catch (error) {
    res.status(500).send('server error');
  }
});
router.delete('/removecart/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Deleting cart item with ID:', id);

    const deleteData = await CartSchema.findByIdAndDelete(id);

    if (!deleteData) {
      return res.status(404).json({ message: "Item not found" }); // Changed to 404 for better error description
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.error('Error deleting cart item:', err); // Log the error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
