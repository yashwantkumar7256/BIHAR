require("dotenv").config();

const express =require('express');
const connectDb = require('./config/db');

const auth=require('./routes/auth.route')

const app=express();
app.use(express.json())
connectDb();

app.use('/api/auth',auth)




app.listen(5000,()=>{
    console.log("running on 5000")
})