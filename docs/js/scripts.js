const rangeElement = document.getElementById('password-generator-range');
const rangeElementText = document.getElementById('password-generator-length-number')
const buttonGenerate = document.getElementById('button-generate')
const formElement = document.getElementById('form')
const finalPassword = document.getElementById('password-final-input')
const strengthLevelWord = document.getElementById('strength-value')
const checkBoxes = document.querySelectorAll('.check-input')

const upperElement = document.getElementById('uppercase')
const lowerElement = document.getElementById('lowercase')
const numberElement = document.getElementById('numbers')
const symbolElement = document.getElementById('symbols')

const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
const alphabetUpperCase = alphabet.toUpperCase();
const numbers = '01234567890123456789';
const symbols = '!"·$%&/()^*{-ª*^`¨´-.,=$';

let passwordLength = 0
let password = '';
let checkedArray= [];


/* const checked = () =>{
    for(const item of checkBoxes){
        if(item.checked){
            checkedArray.push(item)
        }
    }
} */


/* const strengthLevel = () => {
    strengthLevelWord.textContent = '';
    if(checkBoxes.length < 1){
        strengthLevelWord.textContent='tooweak'
    }
    
} */



const createString = (length) =>{
    let newString = '';
    for (let i = 0; i < length; i++){
        newString += password.charAt(Math.floor(Math.random() * password.length))
    }
    return newString
}

formElement.addEventListener('change', ev =>{
    passwordLength = rangeElement.value
    rangeElementText.textContent = passwordLength

    const containsUpper = upperElement.checked;
    const containsLower = lowerElement.checked;
    const containsNumber = numberElement.checked;
    const containsSymbol = symbolElement.checked;

    password = ''

    if (containsUpper){
        password +=  alphabetUpperCase
    }
    if (containsLower){
        password += alphabet
    }
    if(containsNumber) {
        password += numbers
    }
    if(containsSymbol) {
        password +=  symbols
    }
    
})

formElement.addEventListener('submit', ev =>{
    ev.preventDefault()
    finalPassword.value = createString(rangeElement.value)
 /*    checked() */
})





    

