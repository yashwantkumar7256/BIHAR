const userModel=require("../models/user.model")



const register =async(req,res)=>{
    const {email,name,mob}=req.body;
   try{
    if(!email || !name||!mob){
        return res.status(500).json({
            message: !email? "email required"
            : !name? 'name is required'
            : "mob no is required"
        })

    }
     const hare= await userModel.findOne({email})
     if(!hare){
        const user= userModel.create({
            name,
            email,
            mob
        })
        return res.status(200).json('you are register successfully')
     }else{
        res.json('email already exits')
     }

   }catch(err){
    res.json({
        message:err.message
    })

   }


   


}

module.exports={register}