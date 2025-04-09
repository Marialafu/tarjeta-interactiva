const formElement = document.getElementById('form');
const confirmButtonElement = document.getElementById('confirm-button');

const cardNameInputElement = document.getElementById('card-name');
const cardNumberInputElement = document.getElementById('card-number');
const cardMMInputElement = document.getElementById('mm-date');
const cardYYInputElement = document.getElementById('yy-date');
const cardCVCInputElement = document.getElementById('cvc');

const errorName = document.getElementById('error-name');
const errorNumber = document.getElementById('error-number');
const errorMonth = document.getElementById('error-month');
const errorCVC = document.getElementById('error-cvc');

const numberCard = document.getElementById('number-card-front');
const cvcCard = document.getElementById('cvc-card-back');
const dateCard = document.getElementById('date-card-front');
const nameCard = document.getElementById('name-card-front');

confirmButtonElement.value = 'Confirm';

const letters = /[a-zA-Z]/;
const numbers = /\d+/;
const months = /^(0[1-9]|1[0-2])$/;

const invalidCardName = () => {
  if (letters.test(cardNameInputElement.value)) {
    cardNameInputElement.classList.remove('invalid-input');
    errorName.classList.add('hide');
  } else if (cardNameInputElement.value === '') {
    cardNameInputElement.classList.add('invalid-input');
    errorName.classList.remove('hide');
    errorName.textContent = "*Can't be blank";
  } else {
    cardNameInputElement.classList.add('invalid-input');
    errorName.classList.remove('hide');
    errorName.textContent = '*Wrong message. No numbers allowed.';
  }
};

const invalidCardNumber = () => {
  if (letters.test(cardNumberInputElement.value)) {
    cardNumberInputElement.classList.add('invalid-input');
    errorNumber.classList.remove('hide');
    errorNumber.textContent = '*Wrong message. No letters allowed.';
  } else if (cardNumberInputElement.value === '') {
    cardNumberInputElement.classList.add('invalid-input');
    errorNumber.classList.remove('hide');
    errorNumber.textContent = "*Can't be blank";
  } else {
    cardNumberInputElement.classList.remove('invalid-input');
    errorNumber.classList.add('hide');
  }
};
const validMonth = () => {
  if (months.test(cardMMInputElement.value)) {
    cardMMInputElement.classList.remove('invalid-input');
    errorMonth.classList.add('hide');
  } else if (cardMMInputElement.value === '') {
    cardMMInputElement.classList.add('invalid-input');
    errorMonth.classList.remove('hide');
    errorMonth.textContent = "*Can't be blank";
  } else {
    cardMMInputElement.classList.add('invalid-input');
    errorMonth.classList.remove('hide');
    errorMonth.textContent = '*Wrong message. Need valid month.';
  }
};
const invalidCVC = () => {
  if (letters.test(cardCVCInputElement.value)) {
    cardCVCInputElement.classList.add('invalid-input');
    errorCVC.classList.remove('hide');
    errorCVC.textContent = '*Wrong message. No letters allowed.';
  } else if (cardCVCInputElement.value === '') {
    cardCVCInputElement.classList.add('invalid-input');
    errorCVC.classList.remove('hide');
    errorCVC.textContent = "*Can't be blank";
  } else {
    cardCVCInputElement.classList.remove('invalid-input');
    errorCVC.classList.add('hide');
  }
};

const validateForm = event => {
  event.preventDefault();
  invalidCardName();
  invalidCardNumber();
  validMonth();
  invalidCVC();
};
formElement.addEventListener('submit', validateForm);

const putCardName = () => {
  if (cardNameInputElement.value === ''){
    nameCard.textContent = 'JANE APPLESEED'
  } else {
    nameCard.textContent = cardNameInputElement.value.toUpperCase();
  }
  
};
cardNameInputElement.addEventListener('input', putCardName);

const putCardNumber = () => {
  if (cardNumberInputElement.value === ''){
    numberCard.textContent = '0000 0000 0000 0000'
  } else {numberCard.textContent = cardNumberInputElement.value;}
  
};
cardNumberInputElement.addEventListener('input', putCardNumber);

const putCVCNumber = () => {
  if (cardCVCInputElement.value === ''){
    cvcCard.textContent = '000'
  } else {
    cvcCard.textContent = cardCVCInputElement.value;
  }
};
cardCVCInputElement.addEventListener('input', putCVCNumber);

const putMMYYNumber = () => {
  if (cardMMInputElement.value === '' && cardYYInputElement.value === ''){
    dateCard.textContent = `00/00`
  } else if (cardMMInputElement.value === ''){
    dateCard.textContent = `00/${cardYYInputElement.value}`
  } else if (cardYYInputElement.value === ''){
    dateCard.textContent = `${cardMMInputElement.value}/00`
  } else {
    dateCard.textContent = `${cardMMInputElement.value}/${cardYYInputElement.value}`
  }
  
};
cardMMInputElement.addEventListener('input', putMMYYNumber);
cardYYInputElement.addEventListener('input', putMMYYNumber);
