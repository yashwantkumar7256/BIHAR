


import userModel from "../models/auth.model.js";
import bcrypt from "bcrypt"
import {genrateToken} from "../utils/auth.util.js"
import cookie from "cookie-parser"

export const register= async(req,res)=>{
    const {name,email,password}=req.body
  try{
     if(!name || !email|| !password ){
       return res.status(300).json({
        message:"enter every field"
       })
       }
       const isUserExist= await userModel.findOne({email}) 
       if(isUserExist){
       return res.status(300).json({
        message:"user already exist"
       })
       }
       const hased=await bcrypt.hash(password,12)
       const user= await userModel.create({
        email,
        password:hased,
        name
       })
       const {accessToken,refreshToken}=genrateToken({userId:user._id})
       user.refreshToken=refreshToken;

       await user.save()
       
       res.cookie("refreshToken",refreshToken,{
        httpOnly:true
       })

        res.status(201).json({
        message:"user created successfully",
        user,
        accessToken,
        refreshToken

       })
  }catch(err){
    console.log(err)
   return res.status(500).json(err.message)
  }
}



