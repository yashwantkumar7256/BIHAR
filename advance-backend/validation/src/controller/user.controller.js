
import userModel from "../models/user.model.js";

export const register= async(req,res)=>{
const{email,phone,password}=req.body
const error=[]
   try{
     

       const IsExist= await userModel.findOne({email})
       if(IsExist){
        return res.status(300).json({
            message:"email already exist"
        })
       }
       const user= await userModel.create({
        email,
        phone,
        password
       })
       return res.status(201).json({
        message:"user created successfully",
        user
       })

   }catch(err){
    console.log(err.message)
   }
    
    

}