import express, { Router } from "express"
 import { register,Login, refresh } from "../controller/auth.controller.js"
 
 const router=express.Router()

router.post('/register',register)
router.get('/me',Login)
router.post('/refresh',refresh)
export default router