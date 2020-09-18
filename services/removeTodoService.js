const Todo = require('../models/Todo');

module.exports.removeTodo = async (id) => {
    try{
        console.log("we are goint to remove: " + id);
        await Todo.deleteOne({_id: id});
    }
    catch(err){
        throw err;
    }
};
