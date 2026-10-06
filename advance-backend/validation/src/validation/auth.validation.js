

import {body,validationResult} from "express-validator"

export const registerValidation=[
body("email")
.exists().withMessage("email is required")
.isEmail().withMessage("invalid email"),

body("phone")
.exists().withMessage("phone no is required")
.isMobilePhone("en-IN").withMessage("invalid phone number"),

body("password")
.exists().withMessage("password is required")
.trim().isLength({min:6}).withMessage("password min 6 character"),

(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            message:" errrrorrr ",
            errors:errors.array()
        })
    }
    next()
}

]