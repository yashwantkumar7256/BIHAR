const {register}=require('../controller/user.controller')



const express=require('express');

const router=express.Router();


router.post('/register',register)



module.exports=router;