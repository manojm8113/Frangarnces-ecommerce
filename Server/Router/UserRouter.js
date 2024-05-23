const router=require('express').Router()
const user=require('../Model/UserSchema')
const cryptojs=require('crypto-js');
const verifyToken = require('../verifyToken');
router.post('/signin',async(req,res)=>{
    console.log("body datas",req.body);
    req.body.Password=cryptojs.AES.encrypt(req.body.Password,process.env.crypto).toString()
try{
const newUser= new user(req.body)
const datas=await newUser.save()
res.status(200).json("success")
}catch(err){
res.status(500).json("failed")
}
})
router.get('/signups',async(req,res)=>{
    console.log("body datas",req.body);
try{
const datas=await user.findOne({Email:req.body.Email})
res.status(200).json(datas)
}catch(err){
res.status(500).json("failed")
}
})
router.get('/userdata',async(req,res)=>{
    console.log("body datas",req.body);
try{
const alldatas=await user.find()
res.status(200).json(alldatas)
}catch(err){
res.status(500).json("failed")
}
})
router.get('/Getdatas/:id',verifyToken,async(req,res)=>{
    console.log("body datas",req.headers.token);
try{
const datas=await user.findById(req.params.id)
res.status(200).json(datas)
}catch(err){
res.status(500).json("failed")
}
})
router.delete('/deletedata/:id',async(req,res)=>{
    console.log("body datas",req.body);
try{
const datas=await user.findByIdAndDelete(req.params.id)
res.status(200).json(datas)
}catch(err){
res.status(500).json("failed")
}
})
router.put('/updateData/:id', verifyToken, async (req, res) => {
    console.log("Token:", req.headers.authorization);
    console.log("req.params.id", req.params.id);
    try {
        const updatedDetails = await user.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedDetails);
    } catch (err) {
        res.status(500).json("error");
    }
});

module.exports=router
