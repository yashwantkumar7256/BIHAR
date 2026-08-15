const mongoose =require('mongoose')


const userSchema= new mongoose.Schema({

    name :{
        type:String,
        required:[true,'name is require']
    },
    mob:{
      type:String,
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

const usermodel= mongoose.model('User',userSchema);

module.exports=usermodel;