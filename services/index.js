const {getTodos} = require('./getTodosService');
const {addTodo} = require('./addTodoService');
const {removeTodo} = require('./removeTodoService');
const {toggleMark} = require('./toggleMarkService');

module.exports.todoServices = {
    getTodos,
    addTodo,
    removeTodo,
    toggleMark
}