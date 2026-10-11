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



router.post(
  "/",
  authenticate,
  authenticateSaller,
  upload.array("images"),
 (req, res, next) => {
  try {
    if (req.body.price) {
      req.body.price = JSON.parse(req.body.price);
    }

    if (req.body.sizes) {
      req.body.sizes = JSON.parse(req.body.sizes);
    }

    next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid JSON in price or sizes"
    });
  }
},
  createProductValidator,
  createProduct
);

export default router