import express from "express"
import { register } from "../controller/user.controller.js"
import { registerValidation } from "../validation/auth.validation.js"

const router=express.Router()

router.get("/register",registerValidation,register)

export default router