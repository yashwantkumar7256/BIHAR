import productModel from "../models/product.model.js";

import cartModel from "../models/cart.model.js";


export const addToCart=async (req,res)=>{
    const {productId,quantity,size}=req.body;

    const product=await productModel.findById(productId)
    if(!product){
        return res.status(400).json({
            message:"product not found"
        });
    }
    const selectedSize=product.sizes.find(s=>s.size===size)

    if(!selectedSize ){
        return res.status(400).json({
            message:"selected size is not avilable"
        })
    }
     
    if(!selectedSize.stock<quantity){
     return res.status(400).json({
        messsage:"insufficient stock"
     })
    }

    const cart= ( await cartModel.findOne({user:req.user.userId}) ) ?? await cartModel.create({user:req.user.userId})



    res.json("conpleted")
    return res.json("successfully")
}