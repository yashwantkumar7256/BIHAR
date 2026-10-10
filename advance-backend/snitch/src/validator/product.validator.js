import { body, validationResult } from "express-validator";

export const createProductValidator = (req, res) => [
  body("title")
    .exists()
    .withMessage("title required")
    .bail()
    .isString()
    .withMessage("title is required in String")
    .bail()
    .trim()
    .isLength({ min: 10, max: 50 })
    .withMessage("min to max character is 10- 30"),

  body("discription")
    .exists()
    .withMessage("description is required")
    .bail()
    .isString()
    .withMessage("description must is String")
    .bail()
    .trim()
    .isLength({ min: 30, max: 100 }),

  body("price.amount")
    .exists()
    .withMessage("price amount is required")
    .bail()
    .isFloat({ min: 0 })
    .withMessage("price amount must be in float and grater than 0"),

  body("price.currency")
    .exists()
    .withMessage("currency is required")
    .bail()
    .isString()
    .withMessage("currency must be in String")
    .bail()
    .isIn(["INR", "USD"])
    .withMessage("currency must be in INR OR USD"),

  body("sizes")
    .exists()
    .withMessage("sizes required")
    .bail()
    .isString()
    .withMessage("sizes must be in array of object"),

  body("size.*.size")
    .exists()
    .withMessage("sizes must be present in every entry of sizes array ")
    .bail()
    .isString()
    .withMessage("sizes must be a String value")
    .bail()
    .trim()
    .isIn(["XL", "S", "M", "L", "XL", "XXL"])
    .withMessage("size is must be in XS,S,M,XL,XXL"),

  body("sizes.*.stock")
    .exists()
    .withMessage("stock is requird in sizes")
    .bail()
    .isInt({ min: 0 })
    .withMessage("Stock must be a integer value"),

  (req, res, next) => {
    const errors = validationResult(req);
   console.log("in product validator")
    

    if (!errors.isEmpty) {
      console.log(errors)
      return res.status(400).json({
        message: "invalid request",
        errors: errors.array(),
      });
    }
    next();
  },
];
