


import mongoose from "mongoose"

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:true,
    
    },
    email:{
        type:String,
        required:true,
        unique:[true, "email already exist"]
    },
    passwordHash:{
        type:String,
        required:true,

    },
    refreshToken:{
        type:String,
       
    }

})

let  UserModel= mongoose.model("User",userSchema);

export default UserModel;







