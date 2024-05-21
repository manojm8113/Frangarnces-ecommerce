const mongoose=require('mongoose')
const CartSchema=new mongoose.Schema({
    image:{type:String,required:true},
    productname:{type:String,required:true},
    offerprice:{type:Number,required:true},
    userid:{type:String,required:true}
},{timestamps:true})
module.exports=mongoose.model("ecommcart",CartSchema)