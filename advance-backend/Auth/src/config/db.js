  import mongoose from "mongoose"

export const connectToDB=async ()=>{
    try{
    let connect= await mongoose.connect("mongodb://localhost:27017")
    console.log("db connected")
    }catch(err){
   console.log(err)
   process.exit(1)
   } 
 

}