import app from "./app/app.js";
import connectDB from "./config/db.js";
 


connectDB()

app.listen(3000,(req,res)=>{
    console.log("server is running 3000")
})