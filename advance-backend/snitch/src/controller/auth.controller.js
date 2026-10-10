import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt"

import { createAccessToken,createRefreshToken, readAccessToken, readRefreshToken } from "../utils.js/auth.utils.js";

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
          
       const refreshToken= createRefreshToken({
        userId:user._id,
        role:user.role
    })
     

        res.cookie("accessToken",accessToken,{
            httpOnly:true
        })
        await UserModel.findByIdAndUpdate(user._id,{refreshToken})

        return res.status(201).json({
            message:"user created successfully",
            data:{
                user:{
                    email:user.email,
                    name:user.name,
                    id:user._id
                },
                accessToken
            }
        })



    }catch(err){
        res.status(401).json({
            message:err.message
        })
        return res.json(err.message)
    }

}


export const login=async (req,res)=>{
    try{
        const {email,password}=req.body
        const user=await UserModel.findOne({email})
        if(!user){
            return res.status(401).json({
                message:"email or password invalid"
            })
        }

        const isValid=await bcrypt.compare(password,user. passwordHash)
        if(!isValid){
            return res.status(401).json({
                message:"invalid email or password"
            })
        }

        const accessToken= createAccessToken({userId:user._id,role:user.role})
        const refreshToken= createRefreshToken({
            userId:user._id,
            role:user.role
        })

        await UserModel.findOneAndUpdate({email},{refreshToken})

        res.cookie("refreshToken",refreshToken,{
            httpOnly:true
        })
        
        res.status(200).json({
            message:"login successfully",
            data:{
                user:{
                    id:user._id,
                    name:user.name,
                    email:user.email,
                    role:user.role,
                    accessToken

                }
            }
        })


    }catch(err){
        console.log(err.message)
        console.log(err)
    }

}

export const refresh= async (req,res)=>{

    try{
      const refreshToken= req.cookies.refreshToken

      if(!refreshToken){
        return res.status(400).json({
            message:" cookie is required"
        })
      }

      const decode=readRefreshToken(refreshToken)
      const {userId,role}=decode

      const user= await UserModel.findById(userId)

      if(refreshToken != user.refreshToken){
        await UserModel.findOneAndUpdate(user._id,{refreshToken:null})
        return res.status(401).json({
            message:"Refresh token mismatch"
        })
      }

      const accessToken= createAccessToken({userId:user._id,role:user.role})

      const newRefreshToken = createRefreshToken({userId:user._id,role:user.role})

      await UserModel.findByIdAndUpdate(user._id,{
        refreshToken:newRefreshToken
      })

      res.cookie("refreshToken",newRefreshToken,{
        httpOnly:true
      } )

      res.status(200).json({
        message:"token roteted successfully",
        data:{
            user:{
                email:user.email,
                name:user.name,
                id:user._id,
                role:user.role,
                accessToken
            }
        }
      })



    }catch(err){
     console.log(err.message)
     console.log(err)
    }

}


 export const getMe= async (req,res)=>{
    const {userId,role}=req.user
    const user= await UserModel.findById(userId)

    res.status(200).json({
        message:"user data fetch successfully",
        data:{
            user:{
                email:user.email,
                name:user.name,
                id:user._id,

            }
        }
    })

}

