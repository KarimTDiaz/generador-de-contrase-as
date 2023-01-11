const rangeElement = document.getElementById('password-generator-range');
const buttonGenerate = document.getElementById('button-generate')
const formElement = document.getElementById('form')
const finalPassword = document.getElementById('password-final-input')



formElement.addEventListener('submit', ev =>{
    ev.preventDefault()
})


rangeElement.addEventListener('change', (ev) =>{
    ev.target.previousElementSibling.children[0].textContent = rangeElement.value

});

const createString = (length) =>{
    const alphabet = 'abcdefghijklmnñopqrstuvwxyz'
    let newString = '';
    for (let i = 0; i < length; i++){
        
    }
    


}

createString(rangeElement.value)