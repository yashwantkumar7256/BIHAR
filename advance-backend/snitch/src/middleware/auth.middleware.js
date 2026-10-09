import { readAccessToken } from "../utils.js/auth.utils.js";

export const authenticate = (req, res, next) => {
  try {
        
    const AccessToken = req.headers.authorization;
    console.log(AccessToken)

   
    if (!AccessToken) {
      return res.status(401).json({
        message: "Access token is required",
      });
    }

   
    const accessToken = authHeader.split(" ")[1];

    
    if (!accessToken) {
      return res.status(401).json({
        message: "Access token is required",
      });
    }

    
    const decode = readAccessToken(accessToken);

   
    req.user = decode;

   
    next();

  } catch (err) {
    console.log(err.message);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};