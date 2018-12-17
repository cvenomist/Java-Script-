//prompt('Hello')
//alert('Hey Again')


// const myPElement = document.querySelector('p')

// myPElement.textContent = 'I Am Changed by Java Script'

const myPElements = document.querySelectorAll('p')

myPElements.forEach(function(p){
    p.textContent = 'I Am Changed Using For Each loop'
})