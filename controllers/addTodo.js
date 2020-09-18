const {todoServices} = require('../services/index')

module.exports.addTodo = (req,res) => {
    
    const todoItem = req.body;

    Promise.resolve()
    .then(()=> {
        return todoServices.addTodo(todoItem)
    })
    .then(()=> {
        res.sendStatus(201)
    })
    .catch((e) => {
        throw  new Error(e.message);
    })
}