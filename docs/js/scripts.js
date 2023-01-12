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

const checked = () =>{
    let newArray = [];
    for(const item of checkBoxes){
        if(item.checked){
            newArray.push(item)
        }
    }
    return newArray
}

const strengthLevel = () => {
    const checkedBoxes = checked()

    if(checkedBoxes.length === 0){
        strengthLevelWord.textContent=''
    }
    if(checkedBoxes.length === 1){
        strengthLevelWord.textContent='TOO WEAK'
    }
    if(checkedBoxes.length === 2){
        strengthLevelWord.textContent='WEAK'
    }
    if(checkedBoxes.length === 3){
        strengthLevelWord.textContent= 'MEDIUM'
    }
    if(checkedBoxes.length === 4){
        strengthLevelWord.textContent= 'STRONG';
    }
    if(rangeElement.value < 5){
        strengthLevelWord.textContent = 'TOO SHORT'
        buttonGenerate.setAttribute('disabled' , true)
    } 

    if(checkBoxes.length === 0){
        buttonGenerate.setAttribute('disabled' , true)
    } 
}

const createString = (length) =>{
    let newString = '';
    for (let i = 0; i < length; i++){
        newString += password.charAt(Math.floor(Math.random() * password.length))
    }
    return newString
}
const growString = () => {
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
}

formElement.addEventListener('change', ev =>{
    passwordLength = rangeElement.value
    rangeElementText.textContent = passwordLength
    checked()
    strengthLevel()
    growString()
})

formElement.addEventListener('submit', ev =>{
    ev.preventDefault()
    finalPassword.value = createString(rangeElement.value)
})





    

