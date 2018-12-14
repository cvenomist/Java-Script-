/*
let iAmGlobal = 'someValue'

if (true) {
    var iAmLocal = 'someMoreValue'
    iAmGlobal = 'superman'
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmLocal);
console.log(iAmGlobal);
*/

//Kings Problem

//let king = 'John'

if (true) {
    //let king = 'Sam'

    if (true) {

        //if Variables Not defined As Var let Or Const then It Is Globally Accessible
        //Evderytime Define Your Varible if Not Data leak may Possible
        let king = 'Ram'
        console.log(king);
    }
}

if (true) {
    console.log('I Am Second Part : ' + king);
}