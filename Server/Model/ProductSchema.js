const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    image:{type:String,required:true},
    productname:{type:String,required:true,unique:true},
    price:{type:Number,required:true},
    offerprice:{type:Number,required:true},
    description:{type:String,required:true}
},{timestamps:true})
module.exports=mongoose.model("fragrances",productSchema)