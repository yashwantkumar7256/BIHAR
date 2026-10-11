import productModel from "../models/product.model.js";
import { uploadFile } from "../services/storage.service.js";

export const createProduct = async (req, res) => {
  console.log("In createProduct controller");

  try {
    console.log("Body:", req.body);
    console.log("Files:", req.files);

    // Step 1: Check whether images are uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        message: "At least one image is required"
      });
    }

    // Step 2: Upload images to ImageKit
    const filesUrls = [];

    for (let i = 0; i < req.files.length; i++) {
      const response = await uploadFile({
        buffer: req.files[i].buffer,
        fileName: req.files[i].originalname
      });

      filesUrls.push(response.url);
    }

    // Step 3: Create product in MongoDB
    const product = await productModel.create({
      title: req.body.title,

      description: req.body.description,

      price: {
        amount: req.body.price.amount,
        currency: req.body.price.currency
      },
      

      sizes: req.body.sizes,

      images: filesUrls,

      seller: req.user.userId
    });

    // Step 4: Send success response
    return res.status(201).json({
      message: "Product created successfully",
      data: {
        product
      }
    });

  } catch (err) {
    console.error("Product creation failed:", err);

    return res.status(500).json({
      message: "Product creation failed",
      error: err.message
    });
  }
};