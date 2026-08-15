const mongoose =require('mongoose')


const userSchema= new Schema({

    name :{
        type:String,
        required:[true,'name is require']
    },
    mob:{
      type:Number,
      required:[true,'mob is requred']
    },
    password:{
     type:String,
   //  required:[true,'password is required']
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
    }
})

mongoose.auth