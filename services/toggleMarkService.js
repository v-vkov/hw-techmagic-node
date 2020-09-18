const Todo = require('../models/Todo');

module.exports.toggleMark = async (id, isMarked) => {
    await Todo.updateOne({ _id: id }, { marked: isMarked });
};
