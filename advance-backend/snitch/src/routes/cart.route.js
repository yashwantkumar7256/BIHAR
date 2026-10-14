import express from "express"
import { cartValidator } from "../validator/cart.validator.js"
import { addToCart } from "../controller/cart.controller.js"

const router=express.Router()

//req.body={productId,quantity,size}
router.post("/",cartValidator,addToCart)


export default router