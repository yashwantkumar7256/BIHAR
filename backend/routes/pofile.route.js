
const express=require('express')
const { authMiddleware } = require('../middleware/profile.middleware')
const { getStudentProfile } = require('../controller/profile.controller')

const router=express.Router();

router.get('/:id',authMiddleware,getStudentProfile);



module.exports=router;