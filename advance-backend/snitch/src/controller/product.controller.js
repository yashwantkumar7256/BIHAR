
import productModel from "../models/product.model.js"
import {uploadFile} from "../services/storage.service.js"


export const createProduct=async (req,res)=>{
    console.log("in createProduct controller")
    try{
          console.log(req.body)
    console.log(req.files)
    const filesUrls=[]
    for(let i=0; i<req.files.length;i++){
        const response=await uploadFile({
            buffer: req.files[ i ].buffer,
            fileName: req.files[ i ].originalname
        })
        filesUrls.push(response.url)
    }


    const product= await productModel.create({
        title:req.body.title,
        description:req.body.description,
        price:{
            amount:req.body.price.amount,
            curruncy:req.body.price.curruncy
        },
        sizes:req.body.sizes,
        images:filesUrls,
        saller:req.user.userId
    })
   return res.status(201).json({
        message:"product crateed successfully",
        data:{
            product
        }
    })


    }catch(err){
     console.log(err.message)
     console.log(err)
     return res.status(403).json("some thing went wrong")
    }
  
}