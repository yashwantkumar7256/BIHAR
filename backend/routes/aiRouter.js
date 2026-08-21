const express = require("express");

const {
    chatWithAI
} = require("../controller/aiController");


const {authMiddleware} = require("../middleware/profile.middleware");

const router = express.Router();


router.post(
    "/chat",authMiddleware,
    chatWithAI
);


module.exports = router;