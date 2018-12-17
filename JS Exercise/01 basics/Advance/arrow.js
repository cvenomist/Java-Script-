// const sayHello = function(name) {
//     return 'Hey there, ' + name + ' !'
// }

// console.log(sayHello('Sujay'));

//We Use Arrows To Reduce Down The Complexity

const sayHello = (name) => `Hey There, ${name} !`

console.log(sayHello('Sujay'));

const todos = [{
    title : 'Buy RAM',
    isDone : true
},{
    title : 'Install It',
    isDone : true
},{
    title : 'On PC',
    isDone : false
}]

const thingsDone = todos.filter((todo) => todo.isDone === true)

console.log(thingsDone);

//Assignment
myTodos = [{
    title : 'Have breakfast',
    isDone : true,
},{
    title : 'Go to gym',
    isDone : false,
},{
    title : 'Write Code',
    isDone : true,
},{
    title : 'Have coffe',
    isDone : true,
},{
    title : 'Watch Movie',
    isDone : false,
},{
    title : 'Listen Music',
    isDone : false
}];

let notDone = myTodos.filter((todo) => todo.isDone === true);
notDone.forEach((name) => console.log(name.title))
