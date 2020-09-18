const Todo = require('../models/Todo');

module.exports.addTodo = async (todoItem) => {
    await Todo.create(todoItem)
};
