const {todoServices} = require('../services')

module.exports.getTodos = (req, res) => {
    Promise.resolve()
    .then(()=> {
        return todoServices.getTodos();
    })
    .then((result, err)=> {
        res.send(result);
        res.sendStatus(200)
    })
    .catch((e) => {
        throw new Error(e.message);
    })
} 