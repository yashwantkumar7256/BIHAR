const userModel=require('../models/user.model')


const getStudentProfile= async (req,res)=>{

try{
    const student=await userModel.findById(req.params.id).select("-password")

    if(!student){
        return res.status(404).json({
            message: "student not found"
        });
    }

if(req.user.id !=req.params.id){
    return re.status(403).json({
        message:"you can't access this id"
    });
}
res.status(200).json({
    message:"profile fetct successfully",student
})


}catch(err){
    res.status(401).json({
        message:err.message
    })
}

}

module.exports ={getStudentProfile}