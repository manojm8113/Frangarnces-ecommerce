const router=require('express').Router()
const admin=require('../Model/AdminsignupSchema')
const JWT=require('jsonwebtoken')
const Crypto=require('crypto-js')
router.post('/login',async(req,res)=>{
    console.log("reqbody datass",req.body);
    try{
const findadmin=await admin.findOne({Email:req.body.Email})
!findadmin && res.status(401).json('invalid Email')
console.log("email",findadmin);
const decryptepassword=Crypto.AES.decrypt(findadmin.Password,process.env.Crypto)
var originalPassword=decryptepassword.toString(Crypto.enc.Utf8);
console.log("orginal password is",originalPassword);
req.body.Password != originalPassword && res.status(401).json('invalid password')
const pass=JWT.sign({
    id:findadmin._id,
},process.env.JWTSecky,{expiresIn:'1d'})
console.log("Passs",pass);
res.status(200).json({pass,id:findadmin._id})
    }catch(err){  
res.status(500).json("error",err.message)
    }
})
module.exports=router