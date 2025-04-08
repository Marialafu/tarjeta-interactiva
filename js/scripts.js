const formElement = document.getElementById('form')
const confirmButtonElement = document.getElementById('confirm-button')

const cardNameInputElement = document.getElementById('card-name')
const cardNumberInputElement = document.getElementById('card-number')
const cardMMInputElement = document.getElementById('mm-date')
const cardYYInputElement = document.getElementById('yy-date')
const cardCVCInputElement = document.getElementById('cvc')

confirmButtonElement.value = 'Confirm'

const letters = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
const numbers = '0123456789'
const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09']


const invalidCardName = () => {
    for (const letter of cardNameInputElement.value.toUpperCase()){
        if (numbers.includes(letter)){
          return false
        }
    }
}

const invalidCardNumber = () => {
    for (const letter of cardNumberInputElement.value){
        if (letters.includes(letter) || letters.toLowerCase().includes(letter)){
          return false
        }
    }
}
const validMonth = () => {
    for (const month of months){
        if (cardMMInputElement.value.includes(month)){
            return true
        } else {return false}
    }
}


const validateForm = (event) => {
    event.preventDefault()
    
    if (invalidCardName() === false){
        cardNameInputElement.classList.toggle('invalid-input')
    }
    //como se añade un texto
    if (invalidCardNumber() === false){
        cardNumberInputElement.classList.toggle('invalid-input')
    }

    if (validMonth() === false){
        cardMMInputElement.classList.toggle('invalid-input')
    }
    

}
formElement.addEventListener('submit', validateForm)