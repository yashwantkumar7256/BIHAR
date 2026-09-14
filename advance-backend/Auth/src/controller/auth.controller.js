   
 import UserModel from "../models/user.model.js";

 import bcrypt from 'bcrypt'

   export const register= async (req,res)=>{
          let {name,email,password,}=req.body;

          try{
            if(!name || !email || !password ){
                return res.json({
                    message:"fill properly"
                })}
              let isExist= UserModel.findOne({email})
                if(isExist){
                  return res.json({
                    message:"email already exist"
                  })
                }

                const user= await UserModel.create({
                    email,
                    name,
                    passwordHased: await bcrypt.hash(password,12)
                })
                return res.status(201).json({
                    message: "registerd successfully",
                    user
                })
            
            
            

          }catch(err){
            return res.status(500).json(err)
          }
    }