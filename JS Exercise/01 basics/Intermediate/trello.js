const days = ['Mon','Tues','Wed','Thur','Fri','Sat']

// console.log(days[0]);

// days.forEach(function (day,index) {
//     console.log(`Starts With ${index+1} -- ${day}`);
    
// })



//In Fro Lop is Second Step is true then is Comes Directly to 4th Step
//If that Condition Is false then Is moves to third Step

for (let index = days.length - 1 ; index >= 0; index--) {
    // const element = days[index];
    console.log(days[index]);
    
    
}

const myTodos = []

myTodos.push('Buy RAM')
myTodos.push('Install It In CPU')
myTodos.push('Start Computer')

myTodos.forEach(function(todo, index) {
    console.log(`Your Task To ${index + 1} is ${todo}`);
    
    
});


