import mongoose from "mongoose";
import config from "./config.js";


const connectDB= async()=>{
  let connect= await mongoose.connect(config.MONGO_URL)
  console.log("connected")
}
export default connectDB