  import mongoose from "mongoose"

export const connectToDB=async ()=>{
    try{
    let connect= await mongoose.connect(process.env.MONGO_URI)
    console.log("db connected")
    }catch(err){
   console.log(err)
   process.exit(1)
   
   } 
 

}