const express = require("express");

const { chatWithAI } = require("../controller/aiController");
const {chat}=require('../controller/myController')

const { authMiddleware } = require("../middleware/profile.middleware");

const router = express.Router();

router.post("/chat", authMiddleware, chatWithAI);
router.post('/ai',chat)

module.exports = router;
