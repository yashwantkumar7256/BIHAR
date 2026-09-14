import express  from "express"
import dotenv from "dotenv"

import authrouter from '../router/authRouter.js'

const app=express();
 app.use(express.json())
 dotenv.config();
 app.use('/api/auth',authrouter)


export default app