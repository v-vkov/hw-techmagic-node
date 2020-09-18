const {todoServices} = require('../services/index')


module.exports.removeTodo = (req,res) => {
    const todoItem = req.body;
    Promise.resolve()
    .then(()=> {
        return todoServices.removeTodo(todoItem.id)
    })
    .then(()=> {
        res.sendStatus(200)
    })
    .catch((e) => {
        throw new Error(e.message);
    })
}