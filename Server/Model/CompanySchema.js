const mongoose=require('mongoose')
const companySchema=new mongoose.Schema({
    Companyname:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true}
},{timestamps:true})
module.exports=mongoose.model("ecommcompanies",companySchema)