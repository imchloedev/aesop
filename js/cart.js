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