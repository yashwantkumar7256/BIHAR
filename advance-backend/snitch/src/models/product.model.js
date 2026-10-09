import mongoose  from "mongoose";

const productSchema=new mongoose.Schema({

title:{
    type:String,
    required:true,
    minlength:10, 
    maxlength:50,

},
description:{
    type:String,
    required:true,
    minlength:20,
    maxlength:100,

},
  price:{
    amount:{
 type:Number,
    required:true,
    },
    curruncy:{
        type:String,
        enum:["INR","USD"],
        default:"INR"
    }
},
sizes:[
    {
        size:{
            type:String,
            enum:["xs","s","m","l","xl","xxl"]
        },
        stock:{
            type:Number,
            min:0,
            default:0


        }
        
    }
],

saller:{
    type:mongoose.Types.ObjectId,
    ref:"users",
    required:true
},
published:{
    type:Boolean,
    default:false
}


})

const productModel=mongoose.model("products",productSchema)
export default productModel