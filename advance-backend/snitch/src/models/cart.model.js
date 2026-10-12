import mongoose from mongoose

const cartSchema =new mongoose.Schema({

products:[
    {
        product:{
            type:mongoose.Schema.Types.objectId,
            ref:"products",
            required:true
        },
        quantity:{
            type:Number,
            default:1,
            min:1
        },
        size:{
            type:String,
            emum:["XS","S","M","L","XL","XXL"]
        }
    }

],
user:{
    type:mongoose.Schema.Types.objectId,
    ref:"users",
    required:true
}


})

const cartModel= mongoose.model("carts",cartSchema)
export default cartModel