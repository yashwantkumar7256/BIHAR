import express from "express"

 const router=express.Router()
  
 import { register } from "../controller/auth.controller.js"

 router.post('/register',register)

 export default router