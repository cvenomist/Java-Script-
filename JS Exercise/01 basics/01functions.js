/*
let sayHello = function () {
    console.log("Greeting Message User");
    console.log("Hey User!");
    
}

sayHello()
*/

let sayHello = function (name) {
    console.log(`Greeting Message To ${name}`);
    console.log(`Hey ${name}!`);
    
}
sayHello('Sujay')

let fullNameMaker = function(firstName, lastName) {
    console.log('Welcome To Cevenomist');
    console.log(`Happy To Have You, ${firstName} ${lastName}`);
    
}

fullNameMaker('Sujay','Singh')


let myAdder = function (num1, num2) {
    let added = num1 + num2
    return added
    
}

let result = myAdder(39,57)
console.log(result);