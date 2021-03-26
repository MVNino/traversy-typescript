/*
function showTodo(todo: {title: string, text: string}) {
    console.log(todo.title + ': ' + todo.text)
}

let myTodo = {title: 'Trash', text: 'Take out trash'}

showTodo(myTodo)
*/
function printTodo(todo) {
    console.log(todo.title + ': ' + todo.text);
}
var myTodo = {
    title: 'Coding',
    text: 'Just leaning some codes'
}, printTodo;
(printTodo(myTodo));
