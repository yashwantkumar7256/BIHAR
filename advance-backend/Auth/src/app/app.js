import express  from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";

import authrouter from '../router/authRouter.js'

const app=express();
 app.use(express.json())
 app.use(cookieParser())
 dotenv.config();
 app.use('/api/auth',authrouter)


export default app