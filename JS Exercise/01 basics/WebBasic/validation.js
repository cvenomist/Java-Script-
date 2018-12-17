function myValidation() {
    let myValue = document.getElementById('myForm').value;

    if (isNAN(myValue) || myValue < 1 || myValue > 20) {
        console.log("Not A Valid Input");
    } else {
        console.log("Input Is OK");
        
    }
}