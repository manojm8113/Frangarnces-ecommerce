const mongoose=require('mongoose')
const adminSchema=new mongoose.Schema({
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true}
},{timestamps:true})
module.exports=mongoose.model("adminslogin",adminSchema)