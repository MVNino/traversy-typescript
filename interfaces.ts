/*
function showTodo(todo: {title: string, text: string}) {
    console.log(todo.title + ': ' + todo.text)
}

let myTodo = {title: 'Trash', text: 'Take out trash'}

showTodo(myTodo)
*/

interface Todo {
    title: string,
    text: string
}

function printTodo(todo: Todo) {
    console.log(todo.title+': '+todo.text)
}

let myTodo = {
    title: 'Coding',
    text: 'Just leaning some codes',
},

printTodo(myTodo)