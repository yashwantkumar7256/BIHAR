import mongoose from "mongoose"
import config from "./config.js"
const connectDB=async ()=>{
    try{
        await mongoose.connect(config.MONGO_URI)
    }catch(err){
     console.log(err.message)
     
    }
}
export default connectDB