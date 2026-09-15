import userModel from "../models/user.model.js";

import bcrypt from "bcrypt";
import { generateTokens, verifyAccessToken, verifyRefreshToken} from "../utils/auth.js";

export const register = async (req, res) => {
      const { name, email, password } = req.body

    const isUserExists = await userModel.findOne({ email })

    if (isUserExists) {
        return res.status(400).json({
            message: "User already exists",
            errors: [
                {
                    path: "email",
                    message: "User already exists"
                }
            ]
        })
    }

    const user = await userModel.create({
        name,
        email,
        passwordHash: await bcrypt.hash(password, 12)
    })

    const { accessToken, refreshToken } = generateTokens({ userId: user._id })


    user.refreshToken = refreshToken
    await user.save()

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
    })

    res.status(201).json({
        message: "user registered successfully",
        data: {
            user: {
                name: user.name,
                email: user.email
            }
        },
        accessToken
    })

}



export const Login= async (req,res)=>{

  let token= req.headers.authorization
  if(!token){
    return res.json({
      message:"you dont have token"
    })
  }
 const accessToken =await token?.split(" ")[ 1 ]
 console.log("accesstoken",  accessToken)
    if (!accessToken) {
        return res.status(401).json({
            message: "Unauthorized, access token not found",
        })
    }

    try {

        const decoded = verifyAccessToken(accessToken)

        const user = await userModel.findById(decoded.id)

        res.status(200).json({
            message: "user fetched successfully",
            data: {
                user: {
                    name: user.name,
                    email: user.email
                }
            }
        })

    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized, Invalid or expired access token",
        })
    }
  }

  export const refresh= async(req,res)=>{

      const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.status(401).json({
            message: "Unauthorized, refresh token not found",
        })
    }

    try {

        const decoded =  verifyRefreshToken(refreshToken)

        const user = await userModel.findById(decoded.id)

        if (refreshToken !== user.refreshToken) {

            user.refreshToken = null
            await user.save()

            return res.status(401).json({
                message: "Unauthorized, refresh token mismatch",
            })
        }

        const { accessToken, refreshToken: newRefreshToken } = generateTokens({ userId: user._id })

        res.cookie("refreshToken", newRefreshToken, { httpOnly: true })

        user.refreshToken = newRefreshToken
        await user.save()

        res.status(200).json({
            message: "Tokens refreshed successfully",
            accessToken
        })
    }
    catch (err) {
        return res.status(401).json({
            message: "Unauthorized, Invalid or expired refresh token",
        })
    }
  }
