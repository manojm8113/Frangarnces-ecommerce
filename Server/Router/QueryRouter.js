const router=require('express').Router()
const query=require('../Model/QuerySchema')
const verifyToken = require('../verifyToken');
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
router.get('/Getdatas/:id',verifyToken,async(req,res)=>{
    console.log("body datas",req.headers.token);
try{
const datas=await user.findById(req.params.id)
res.status(200).json(datas)
}catch(err){
res.status(500).json("failed")
}
})
router.get('/Getquery',async(req,res)=>{
    console.log("body datas",req.headers.token);
try{
const datas=await user.find()
res.status(200).json(datas)
}catch(err){
res.status(500).json("failed")
}
})
module.exports=router