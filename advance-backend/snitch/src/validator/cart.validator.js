import { body, validationResult } from "express-validator";

export const cartValidator=[

    
    body("productId")
    .exists().withMessage("productId must requird").bail()
    .isString().withMessage("productId must be String").bail()
    .isMongoId().withMessage("productId must be valid mongo id"),

    body("quantity")
    .exists().withMessage("quantity is required").bail()
    .isInt({min:1}).withMessage("quantity must be a int").bail(),

    body("size")
    .exists().withMessage("size is required").bail()
    .isIn(["XS","S","M","L","XL","XXL"]).withMessage("size must be one of XS,S,M,L,XL,XXL"),

    (req,res,next)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty){
            res.status(400).json({
                message:"validation faild",
                error:errors.array()
            })
        }

        next()

    }


]