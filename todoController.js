const Todo = require("./models/todoModel")

exports.createTodo = async (req, res) => {
    try {
        const newTodo = await Todo.findOne({ title: req.body.title })
        if (newTodo) {
            return res.status(400).json({
                status: false,
                message: "todo already exists"
            })
        }

        const todoSave = new Todo(req.body)
        await todoSave.save();
        return res.status(201).json({
            status: true,
            message: "todo has been created",
            todoToReturn: todoSave
        })

    } catch (error) {
        return res.status(400).json({ error })
    }
}


exports.getAll = async (req, res) => {
    try {
        const toDo = await Todo.find();
        return res.status(200).json({
            status: true,
            message: "all todos",
            todos: toDo
        })
    } catch (error) {
        return res.status(200).json({
            error
        })
    }
};
