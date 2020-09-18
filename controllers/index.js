const {getTodos} = require('./getTodos');
const {addTodo} = require('./addTodo');
const {removeTodo} = require('./removeTodo');
const {toggleMark} = require('./toggleMark');


module.exports.todo = {
    getTodos,
    addTodo,
    removeTodo,
    toggleMark
}