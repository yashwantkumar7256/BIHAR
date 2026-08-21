
const express= require('express')


const router=express.Router();
const {createCourse}=require('../controller/course.controller')


router.post('/createCourse',createCourse)


module.exports=router;