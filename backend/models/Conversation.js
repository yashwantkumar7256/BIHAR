const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

    role: {
        type: String,
        enum: ["user", "assistant"],
        required: true
    },

    content: {
        type: String,
        required: true
    }

});


const conversationSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    },

    messages: [messageSchema]

}, {
    timestamps: true
});


const Conversation =
    mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;