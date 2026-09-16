import express from "express"
import cookieParser from "cookie-parser"

let app=express()

app.use(express.json())
app.use(cookieParser())

import authrouter from "../router/auth.router.js"



app.use("/api/auth/",authrouter)

export default app