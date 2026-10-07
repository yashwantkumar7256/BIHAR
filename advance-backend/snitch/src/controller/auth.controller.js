import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt"

import { createAccessToken,createRefreshToken } from "../utils.js/auth.utils.js";

export const register=async (req,res)=>{
 try{
      const {name ,email,password}=req.body

      const isExist=await UserModel.findOne({email})
      if(isExist){
        return res.status(301).json({
            message:"invalid or try another email"
        }) }
         const user=await UserModel.create({
            email,
            name, 
            passwordHash: await bcrypt.hash(password,12)
        })
        
        const accessToken= createAccessToken({
            userId:user._id,
            role:user.role
        })
          
       const refreshToken=createAccessToken({
        userId:user._id,
        role:user.role
    })

        res.cookie("accessToken",accessToken,{
            httpOnly:true
        })

        return res.status(201).json({
            message:"user created successfully",
            user
        })



    }catch(err){
        return res.json(err.message)
    }

}