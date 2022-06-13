//close button 

let deleteBtn = document.querySelectorAll('.cart_deleteBtn');
let cartContent = document.querySelectorAll('.cart_summary');

let currentItems = cartContent.length;

deleteBtn.forEach((el, index) => {
  el.addEventListener('click', function () {

    cartContent[index].style.display = "none";
    currentItems -= 1;

    if (currentItems <= 0) {
      document.querySelector('.cart_empty_alert').style.display = "block";
      document.querySelector('.cart_summary_price').style.visibility = "hidden";
      document.querySelector('.cart_purchase').style.visibility = "hidden";
    }

    console.log(currentItems);





  });
});




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