const Todo = require("./models/todoModel");


exports.createTodo = async (req, res) => {
    try {
        // const newTodo = await Todo.findOne({ title: req.body.title })
        // if (newTodo) {
        //    return res.status(200).json("todo already exists")
        // }

       const { title, description } = req.body;

        const todoSave = await Todo.create({ title, description })
        await todoSave.save();
        return res.status(201).json({
            status: true,
            message: "todo has been created",
            todoToReturn: todoSave
        })

    } catch (error) {
        console.log(error)
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
