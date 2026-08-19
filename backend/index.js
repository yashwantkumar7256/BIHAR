require("dotenv").config();

const express =require('express');
const connectDb = require('./config/db');

const auth=require('./routes/auth.route')
const profile=require('./routes/pofile.route')

const app=express();
app.use(express.json())
const cors = require("cors");

app.use(cors());
connectDb();

app.use('/api/auth',auth)
app.use('/api/profile',profile)




app.listen(5000,()=>{
    console.log("running on port 5000")
})