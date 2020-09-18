const {todoServices} = require('../services/index')


module.exports.toggleMark = (req,res) => {
    const todoItem = req.body;
    console.log(todoItem);
    Promise.resolve()
    .then(()=> {
        return todoServices.toggleMark(todoItem.id, todoItem.isMarked)
    })
    .then(()=> {
        res.sendStatus(200)
    })
    .catch((e) => {
        throw new Error(e.message);
    })
}