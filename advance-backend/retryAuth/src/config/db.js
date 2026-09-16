import mongoose from "mongoose"
import config from "./config.js"


const connectDB = async ()=>{
try{
  const res=await mongoose.connect(config.MONGO_URI)
  console.log("db connected")
}catch(err){

console.log(err)
process.exit(1)
}}
export default connectDB