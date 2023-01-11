const rangeElement = document.getElementById('password-generator-range');
const rangeElementText = document.getElementById('password-generator-length-number')
const buttonGenerate = document.getElementById('button-generate')
const formElement = document.getElementById('form')
const finalPassword = document.getElementById('password-final-input')
const checkBoxes = document.querySelectorAll('.check-input')
let passwordLength = 0
const alphabet = 'abcdefghijklmnñopqrstuvwxyz';

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
    console.dir(ev.target.id)
    passwordLength = rangeElement.value
    rangeElementText.textContent = passwordLength
})

const createString = (length) =>{
    let newString = '';
    for (let i = 0; i < length; i++){
        newString += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    }
    return newString
}

const createStringUppercases = (length) =>{
    const alphabetUpperCasse = alphabet.toUpperCase()
    let newStringUpperCases = '';
    for (let i = 0; i < length; i++){
        newStringUpperCases += alphabetUpperCasse.charAt(Math.floor(Math.random() * alphabetUpperCasse.length))
    }
    return newStringUpperCases
}

    

