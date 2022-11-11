const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
        default: 1,
    },
    createdAt: {
        type: Date.now
    }


})