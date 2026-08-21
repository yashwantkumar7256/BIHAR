// const courseModel=require('../models/course.model')

// const createCourse= async (req,res)=>{
    
//     try{
//         const {name,instracter,duration,price,time,slug}=req.body;
        
//       const courses=await courseModel.create({
//         name,
//         slug,
//         time,
//         duration,
//         time,
//         price,
//         instracter
//       })
//       res.status(200).json({
//         message:"data created successfully",
//         courses
          
//       })


//     }catch(err){
//         res.status(400).json("err.message")
//     }

// }
// module.exports={createCourse}

const Course = require("../models/course.model");

const createCourse = async (req, res) => {
    try {

        const {
            name,
            slug,
            description,
            price,
            duration,
            instructor,
            topics,
            content
        } = req.body;

        const course = await Course.create({
            name,
            slug,
            description,
            price,
            duration,
            instructor,
            topics,
            content
        });

        res.status(201).json({
            success: true,
            message: "Course created successfully",
            course
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createCourse
};