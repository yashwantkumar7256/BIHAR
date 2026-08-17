
const userModel=require("../models/user.model")
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")



const register =async(req,res)=>{
    const {email,name,mob,password}=req.body;
    const hased= await bcrypt.hash(password,10);
   try{
    if(!email || !name||!mob){
        return res.status(500).json({
            // status:success,
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
            mob,
            password:hased
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




const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "Both are required",
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Email or password is invalid",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Email or password is invalid",
      });
    }

      const token=jwt.sign(
        {
           id:user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn:'2days'
      }
    
    );
    res.status(200).json({
        message:"login successful",
        token,
        user:{
            id:user._id,
            name:user.name,
            email:user.email
        }
    })

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Some internal error",
    });
  }
}




const logout=(req,res)=>{
    // res.clearCookie('token');
    return res.status(200).json({
        message:"loged out successful"
    })
}







module.exports={register,login,logout};



