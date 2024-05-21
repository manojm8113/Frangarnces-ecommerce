const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    Username:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Phone:{type:Number,required:true},
    Address:{type:String,required:true},
    Pincode:{type:Number,required:true},
    Password:{type:String,required:true}
},{timestamps:true})
module.exports=mongoose.model("ecommdatas",userSchema)