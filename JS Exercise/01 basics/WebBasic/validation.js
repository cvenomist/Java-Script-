function myValidation() {
    let myValue = document.getElementById('myform').value;

    if (myValue > 10 || myValue > 20) {
        console.log("Not A Valid Input");
    } else {
        console.log("Input Is OK");
        
    }
}

//Form Validation

document.querySelector('.myform').addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.target.username.value = '';
    event.target.realname.value = '';
})
