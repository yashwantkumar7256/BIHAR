


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
    passwordHased:{
        type:String,
        required:true,

    },
    accesssToken:{
        type:String,
       
    }

})

let  UserModel= mongoose.model("User",userSchema);

export default UserModel;







