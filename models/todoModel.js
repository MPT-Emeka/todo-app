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
        type: Date,
        default: new Date().toDateString()
    }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo;