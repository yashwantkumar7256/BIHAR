require("dotenv").config();

const express =require('express');
const connectDb = require('./config/db');

const auth=require('./routes/auth.route')
const profile=require('./routes/pofile.route')
const course=require('./routes/create.router')
const aiRoutes=require('./routes/aiRouter')

const app=express();
app.use(express.json())
const cors = require("cors");
const { create } = require("./models/user.model");

app.use(cors());
connectDb();

app.use('/api/auth',auth)
app.use('/api/profile',profile)
app.use('/api/create',course)
app.use("/api/ai", aiRoutes);




app.listen(process.env.PORT,()=>{
    console.log(`running on port ${process.env.PORT}`)
})