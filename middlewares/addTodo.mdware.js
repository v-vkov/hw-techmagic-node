const Todo = require('../models/Todo');
const Joi = require('joi');


module.exports = (req, res, next) => {
    try {
        const todoName = req.body.name;
        const todoDescr = req.body.description;
        const todoItem = {
            name: todoName,
            description: !todoDescr ? null : todoDescr,
            marked: false
         };
     
        const todo = new Todo(todoItem);
        const result = todo.joiValidate(todoItem); 

            if (result.error){
               throw new Error(result.error);
            }
    
        req.body = todoItem;
    
        next();

    } catch (e) {
        res.status(400).json(e.message);
    }
}