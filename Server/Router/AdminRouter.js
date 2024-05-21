const router=require('express').Router()
const multer  = require('multer')
const ProductSchema=require('../Model/ProductSchema')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/src/Images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null,uniqueSuffix+ file.originalname)
    }
  })
  const upload = multer({ storage: storage })
router.post('/uploadimage',upload.single("image"),async(req,res)=>{
    console.log("reqbody dtasddfghbcb",req.body);
    const {productname,price,offerprice,description} = req.body;
    const imageName = req.file.filename;
    console.log("from backend",productname,price,offerprice,description,imageName);
    try{
        if(!productname || !price || !offerprice || !description){
            return res.status(400).json({error:"rerquired fields are missing"});
        }
      await ProductSchema.create({
        image:imageName,productname,price,offerprice,description
      })
        console.log("okesss");
        res.status({status:"ok"})
    }catch(error){
res.json({status:error})
    }
});
router.get("/getimage",async(req,res)=>{
    try{
       const data= await ProductSchema.find({})
       console.log(data);
            res.status(200).json(data)
        }catch(error){
            res.json({status:error})
        }
    }
)
router.get('/getproduct/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const product = await ProductSchema.findById(id);
      res.json(product);
  } catch (error) {
      res.status(500).send('Server error');
  }
});
module.exports=router