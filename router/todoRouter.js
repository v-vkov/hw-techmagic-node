const router = require('express').Router();

const {todo} = require('../controllers');
const {addTodoMdware} = require('../middlewares')

router.get('/', todo.getTodos);
router.post('/add', addTodoMdware, todo.addTodo);
router.put('/marked', todo.toggleMark);
router.delete('/remove', todo.removeTodo);

module.exports = router;

