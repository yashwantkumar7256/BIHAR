import express from "express"

 const router=express.Router()
  
 import { login, refresh, register } from "../controller/auth.controller.js"

 router.post('/register',register)
 router.get('/login',login)
 router.get("/refresh",refresh)

 export default router