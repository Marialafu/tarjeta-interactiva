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
    if (numbers.includes(cardNameInputElement.value)){
        return false
    }
}


const validateForm = (event) => {
    event.preventDefault()
    console.log(validName());
    

}
formElement.addEventListener('submit', validateForm)