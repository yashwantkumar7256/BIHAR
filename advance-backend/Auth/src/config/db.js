  import mongoose from "mongoose"
  import config from './config.js'

export const connectToDB=async ()=>{
    try{
    let connect= await mongoose.connect(config.MONGO_URI)
    console.log("db connected")
    }catch(err){
   console.log(err)
   process.exit(1)
   
   } 
 

}