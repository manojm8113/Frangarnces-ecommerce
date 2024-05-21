const router=require('express').Router()
const user=require('../Model/UserSchema')
const JWT=require('jsonwebtoken')
const Crypto=require('crypto-js')
router.post('/login',async(req,res)=>{
    try{
const finduser=await user.findOne({Email:req.body.Email})
!finduser && res.status(401).json('invalid Email')
console.log("email",finduser);
const decryptepassword=Crypto.AES.decrypt(finduser.Password,process.env.crypto)
var originalPassword=decryptepassword.toString(Crypto.enc.Utf8);
console.log("orginal password is",originalPassword);
req.body.Password != originalPassword && res.status(401).json('invalid password')
const token=JWT.sign({
    id:finduser._id,
},process.env.JWTSecky,{expiresIn:'1d'})
console.log("Token",token);
res.status(200).json({token,id:finduser._id})
    }catch(err){  
res.status(500).json("error",err.message)
    }
})
module.exports=router