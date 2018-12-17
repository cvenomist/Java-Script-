//prompt('Hello')
//alert('Hey Again')


// const myPElement = document.querySelector('p')

// myPElement.textContent = 'I Am Changed by Java Script'

const myElement = document.querySelectorAll('.classone')
console.log(myElement[0]);

//Track Input Form

document.querySelector('#myform').addEventListener('input', ()=> {
console.log(event.target.value);

})

