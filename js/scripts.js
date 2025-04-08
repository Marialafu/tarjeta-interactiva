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


const validName = () => {
    for (const letter of cardNameInputElement.value){
        numbers.includes(letter)
        console.log('no valido');
        break
    }

}


const validateForm = (event) => {
    event.preventDefault()
    validName()
    
    

}
formElement.addEventListener('submit', validateForm)