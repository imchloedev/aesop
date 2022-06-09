// quantity

function count(type) {
  // 결과를 표시할 element
  const resultElement = document.getElementById('result');
  const resultAdultsElement = document.getElementById('adults_result');

  // const reset = document.getElementById('resetbtn');

  // 현재 화면에 표시된 값
  let number = resultElement.innerText;

  // 더하기/빼기
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

  // 결과 출력
  resultElement.innerText = number;
  resultAdultsElement.innerText = number;
};
