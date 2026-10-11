import { body, validationResult } from "express-validator";

export const createProductValidator = [

  // Title validation
  body("title")
    .exists()
    .withMessage("Title is required")
    .bail()
    .isString()
    .withMessage("Title must be a string")
    .bail()
    .trim()
    .isLength({ min: 10, max: 50 })
    .withMessage("Title must be between 10 and 50 characters"),

  // Description validation
  body("description")
    .exists()
    .withMessage("Description is required")
    .bail()
    .isString()
    .withMessage("Description must be a string")
    .bail()
    .trim()
    .isLength({ min: 30, max: 100 })
    .withMessage("Description must be between 30 and 100 characters"),

  // Price amount validation
  body("price.amount")
    .exists()
    .withMessage("Price amount is required")
    .bail()
    .isFloat({ gt: 0 })
    .withMessage("Price amount must be greater than 0"),

  // Currency validation
  body("price.currency")
    .exists()
    .withMessage("Currency is required")
    .bail()
    .isString()
    .withMessage("Currency must be a string")
    .bail()
    .isIn(["INR", "USD"])
    .withMessage("Currency must be INR or USD"),

  // Sizes array validation
  body("sizes")
    .isArray({ min: 1 })
    .withMessage("Sizes must be a non-empty array"),

  // Each size must be an object
  body("sizes.*")
    .isObject()
    .withMessage("Each size entry must be an object"),

  // Size name validation
  body("sizes.*.size")
    .exists()
    .withMessage("Size is required in every entry")
    .bail()
    .isString()
    .withMessage("Size must be a string")
    .bail()
    .trim()
    .isIn(["XS", "S", "M", "L", "XL", "XXL"])
    .withMessage("Size must be XS, S, M, L, XL or XXL"),

  // Stock validation
  body("sizes.*.stock")
    .exists()
    .withMessage("Stock is required in every size entry")
    .bail()
    .isInt({ min: 0 })
    .withMessage("Stock must be a non-negative integer"),

  // Check validation errors
  (req, res, next) => {

    console.log("Inside product validator");

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Invalid request",
        errors: errors.array(),
      });
    }

    next();
  },

];