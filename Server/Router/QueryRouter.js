const router=require('express').Router()
const query=require('../Model/QuerySchema')
router.post('/send',async(req,res)=>{
    console.log("body datas",req.body);
try{
const newUser= new query(req.body)
const datas=await newUser.save()
res.status(200).json("success")
}catch(err){
res.status(500).json("failed")
}
})
router.get('/Getquery', async (req, res) => {
    console.log("Request received to get queries");
    try {
      const queries = await query.find();
      res.status(200).json(queries);
    } catch (err) {
      console.error("Error fetching data:", err); // Log the error for more details
      res.status(500).json({ message: "Failed to fetch queries", error: err.message });
    }
  });
module.exports=router