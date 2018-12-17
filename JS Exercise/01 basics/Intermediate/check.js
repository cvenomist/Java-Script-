let userName = 'MrSJAY';
let password = '12345qwerty123';

let userChecker = function(myString) {
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true    
    }
    return false
}
//console.log(userChecker(password));
let passChecker = function(password) {
    if ((password.includes(12345)) && (password.length > 8)) {
        return true    
    }
    return false
}
console.log(passChecker(password));