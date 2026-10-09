import express from "express"
import { register , login, refresh, getMe} from "../controller/auth.controller.js"
import  {registerValidator,loginValidator}  from "../validator/auth.validator.js"
import { authenticate } from "../middleware/auth.middleware.js"


const router =express.Router()


router.post("/register",registerValidator,register)
router.post('/login',loginValidator,login)
router.get("/refresh",refresh)
router.get("/me",authenticate,getMe)

export default router