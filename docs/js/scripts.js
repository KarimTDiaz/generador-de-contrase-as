const rangeElement = document.getElementById('password-generator-range');
const rangeElementText = document.getElementById('password-generator-length-number')
const buttonGenerate = document.getElementById('button-generate')
const formElement = document.getElementById('form')
const finalPassword = document.getElementById('password-final-input')
const checkBoxes = document.querySelectorAll('.check-input')
let passwordLength = 0
let password = '';
const upperElement = document.getElementById('uppercase')
const lowerElement = document.getElementById('lowercase')
const numberElement = document.getElementById('numbers')
const symbolElement = document.getElementById('symbols')
const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
const alphabetUpperCase = alphabet.toUpperCase();
const numbers = '0123456789';
const symbols = '!"·$%&/()^*{-ª';


formElement.addEventListener('submit', ev =>{
    ev.preventDefault()
    finalPassword.value = createString(rangeElement.value)
    checked()
})

const checked = () =>{
    for(const item of checkBoxes){
        if(item.checked){
            console.log(item.id + ' esta marcado')
        }
    }
}

formElement.addEventListener('change', ev =>{
    passwordLength = rangeElement.value
    rangeElementText.textContent = passwordLength

    const containsUpper = upperElement.checked;
    const containsLower = lowerElement.checked;
    const containsNumber = numberElement.checked;
    const containsSymbol = symbolElement.checked;

    console.log(containsUpper, containsLower, containsNumber, containsSymbol)
    if(containsUpper){}

})





const createString = (length) =>{
    let newString = '';
    for (let i = 0; i < length; i++){
        newString += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }
    return newString
}

/* const createStringUppercases = (length) =>{
    const alphabetUpperCasse = alphabet.toUpperCase()
    let newStringUpperCases = '';
    for (let i = 0; i < length; i++){
        newStringUpperCases += alphabetUpperCasse.charAt(Math.floor(Math.random() * alphabetUpperCasse.length))
    }
    return newStringUpperCases
} */

    

