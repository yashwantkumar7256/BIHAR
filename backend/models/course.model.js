const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String
    },

    price: {
        type: Number
    },

    duration: {
        type: String
    },

    instructor: {
        type: String
    },

    topics: {
        type: [String]
    },

    content: {
        type: String
    },

    isActive: {
        type: Boolean,
        default: true
    }

});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;