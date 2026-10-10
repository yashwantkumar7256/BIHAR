import { readAccessToken } from "../utils.js/auth.utils.js";

export const authenticate = (req, res, next) => {
  try {
        
    const accessToken = req.headers.authorization?.split(" ")[ 1 ];
    console.log(accessToken)

   
    if (!accessToken) {
      return res.status(401).json({
        message: "Access token is required",
      });
    }

       const decode = readAccessToken(accessToken);

   
    req.user = decode;

   
    next();

  } catch (err) {
    console.log(err);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};


export const authenticateSaller=(req,res,next)=>{
  console.log(req.user.role)

  if(req.user.role!=="seller"){
 return res.status(401).json({
  message:"user is not outhorized person"})
  }
  next()
   

}