import express, { json } from "express"

import multer from "multer"
import { authenticate, authenticateSaller } from "../middleware/auth.middleware.js"
import { createProduct } from "../controller/product.controller.js"
import {createProductValidator} from "../validator/product.validator.js"

const upload=multer({
    storage:multer.memoryStorage(),
    limits:{
        files:3,
        fileSize:5*1024*1024 //5MB

    },
})


const router=express.Router()



router.post("/",authenticate,authenticateSaller,upload.array("images"),
(req,res,next)=>{
    req.body?.price && (req.body.price=JSON.parse(req.body.price))
    req.body?.sezes && (req.body.sizes=JSON.parse(req.body.sizes))
    next()
},createProductValidator,createProduct)

export default router