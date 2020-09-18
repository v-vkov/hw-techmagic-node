const Todo = require('../models/Todo');

module.exports.getTodos = async () => {
    try{
        const todos = await Todo.find();
        return todos
            .map(todoElement => {
                return todoElement;
            });    
    }
    catch(err){
        throw err;
    }
};
