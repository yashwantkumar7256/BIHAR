import config from "../config/config.js";
import jwt from "jsonwebtoken";

export function createAccessToken({ userId, role }) {
   console.log("in createAccessToken")
   
   const accessToken = jwt.sign(
      { userId, role }, 
      config.ACCESS_TOKEN_SECRET, 
      { expiresIn: "15Min" } 
   );
   
   return accessToken;
}

export const readAccessToken=(accessToken)=>{
   return jwt.verify(accessToken,config.ACCESS_TOKEN_SECRET)
}
export const createRefreshToken=({userId,role})=>{
  
   const refreshToken=jwt.sign( {userId,role},
      config.REFRESH_TOKEN_SECRET,{expiresIn:"7days"}
   )
   return refreshToken
}


export  const readRefreshToken=(refreshToken)=>{
   return jwt.verify(refreshToken,config.REFRESH_TOKEN_SECRET)
}
