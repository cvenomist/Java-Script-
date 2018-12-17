const myTodos = ['Buy RAM','Install RAM','Start PC']
//console.log(myTodos.indexOf('Buy RAM'));

const newTodos = [{
    title : 'Buy RAM',
    isDone : false,
}, {
    title : 'Install RAM',
    isDone : false,
}, {
    title : 'Start PC',
    isDone : true,
}]

/*
const index = newTodos.findIndex(function(todo, index){
    return todo.title === 'Install RAM'
})

console.log(index);
*/
// Method One
const findTodos = function(myTodos,title) {
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return myTodos[index]
}

let printMe = findTodos(newTodos, 'Install RAM')
//newTodos.findTodos[index]

console.log(printMe);

//Method Two
const findTodo = function(myTodos,title) {
    const titleReturned = myTodos.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe1 = findTodo(newTodos, 'Install RAM')
//newTodos.findTodos[index]

console.log(printMe1);



