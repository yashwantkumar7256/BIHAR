import express, { Router } from "express"


 const router=express.Router()

router.get('/register',(req,res)=>{
    return res.send("jai ho")
})

export default router