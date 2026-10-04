import app from "./app/app.js";
import connectDB from "./config/mongo.js";

 connectDB()
app.listen(3000,()=>{
    console.log("server is running 3000")
})