'use strict';

//close button 

let deleteBtn = document.querySelectorAll('.cart_deleteBtn');
let cartContent = document.querySelectorAll('.cart_summary');
let productPrice = document.querySelectorAll('.cart_product_price');

let currentItems = cartContent.length;

deleteBtn.forEach((el, index) => {
  el.addEventListener('click', function () {

    cartContent[index].style.display = "none";
    productPrice[index].innerText = 0;
    currentItems -= 1;

    if (currentItems <= 0) {
      document.querySelector('.cart_empty_alert').style.display = "block";
      document.querySelector('.cart_summary_price').style.display = "none";
      document.querySelector('.cart_purchase').style.display = "none";
      document.querySelector('.cart_list').classList.add('cart_empty');
    }

    console.log(currentItems);
  });
});



//cart price calculation

let cartPrices = document.querySelectorAll('.cart_product_price');
let shipping = document.querySelector('.cart_shipping');
let subtotal = document.querySelector('.cart_subtotal');
let total = document.querySelector('.cart_total');


const prices = [...document.querySelectorAll('.cart_product_price')];

const initialValue = 0;
const sumWithInitial = prices.reduce(
  (previousValue, currentValue) => Number(previousValue.innerText) + Number(currentValue.innerText),
);

subtotal.innerText = sumWithInitial.toFixed(2);
total.innerText = (Number(sumWithInitial) + Number(shipping.innerText)).toFixed(2);



// quantity

function count(type) {
  const resultElement = document.getElementById('result');

  let number = resultElement.innerText;

  if (type === 'plus') {
    if (number !== 0) {
      number = parseInt(number) + 1;
    };
  } else if (type === 'minus') {
    if (number <= 0) {
      number = parseInt(number) - 0;
    } else {
      number = parseInt(number) - 1;
    };
  };

  resultElement.innerText = number;
};



// quantity2

function count2(type) {

  const resultElement2 = document.getElementById('result2');
  let number = resultElement2.innerText;

  if (type === 'plus') {
    if (number !== 0) {
      number = parseInt(number) + 1;
    };
  } else if (type === 'minus') {
    if (number <= 0) {
      number = parseInt(number) - 0;
    } else {
      number = parseInt(number) - 1;
    };
  };

  resultElement2.innerText = number;
};



//check out
document.querySelector('.cart_purchase button').addEventListener('click', () => {
  window.confirm("Please sign in first.");
});