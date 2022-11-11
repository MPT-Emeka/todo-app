const express = require("express")
const todoController = require("./todoController")

const router = express.Router();

const { createTodo, getAll } = todoController

router
    .post("/create", createTodo)
    .get("/getallTodos", getAll)

module.exports = router;