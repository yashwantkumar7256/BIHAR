import express from "express"
import { register , login, refresh} from "../controller/auth.controller.js"
import  {registerValidator,loginValidator}  from "../validator/auth.validator.js"


const router =express.Router()


router.post("/register",registerValidator,register)
router.post('/login',loginValidator,login)
router.get("/refresh",refresh)

export default router