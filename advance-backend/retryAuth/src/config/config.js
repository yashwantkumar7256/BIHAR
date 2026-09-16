 import dotenv from "dotenv"

 dotenv.config();


 const config={

    ACCESS_TOKEN:process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN:process.env.ACCESS_TOKEN_SECRET,
    MONGO_URI:process.env.MONGO_URI


 }
 export default config