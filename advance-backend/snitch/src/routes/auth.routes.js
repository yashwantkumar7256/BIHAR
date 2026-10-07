import express from "express"
import { register } from "../controller/auth.controller.js"
import  {registerValidator}  from "../validator/auth.validator.js"


const router =express.Router()


router.post("/register",registerValidator,register)

export default router