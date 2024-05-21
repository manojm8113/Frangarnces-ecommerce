const router=require('express').Router()
const company=require('../Model/CompanySchema')
const cryptojs=require('crypto-js');
const verifyToken = require('../verifyToken');
router.post('/signin',async(req,res)=>{
    console.log("body datas",req.body);
    req.body.Password=cryptojs.AES.encrypt(req.body.Password,process.env.crypto).toString()
try{
const newUser= new company(req.body)
const datas=await newUser.save()
res.status(200).json("success")
}catch(err){
res.status(500).json("failed")
}
})
router.get('/companydata',async(req,res)=>{
    console.log("body datas",req.body);
try{
const alldatas=await user.find()
res.status(200).json(alldatas)
}catch(err){
res.status(500).json("failed")
}
})
module.exports=router