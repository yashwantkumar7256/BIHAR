import {body,validationResult} from "express-validator"


export const registerValidator=[
    body("email").exists().withMessage("email is required")
    .trim()

    .isEmail().withMessage("email is not valid"),

    body("name")
    .exists().withMessage("name is required")
    .trim()
    .isLength({min:2,max:30}).withMessage("name length must be between 2 to 30 letter"),

    body("password")
    .exists().withMessage("password is requird")
    .isString().withMessage("password must be required")
    .trim()
    .isLength({min:6}).withMessage("password must be minimum 6 character"),
    (req,res,next)=>{
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalid request",
                errors:errors.array()
            })
        }
        next()
    }

]

export const loginValidator=[
    body("email")
    .exists().withMessage("email is required").bail()
    .trim()
    .isEmail().withMessage("email is wrong formated"),
    body("password")
     .exists().withMessage("password").bail()
     .isString().withMessage("password must be in String").bail()
     .trim()
     .isLength({min:6}).withMessage("password at least 6 character long"),
     (req,res,next)=>{
        const error= validationResult(req)
       if(!error.isEmpty()){
        return res.status(400).json({
            message:"invalid data",
            error:error.array()
        })
       }
       next()
     }
]