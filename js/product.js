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
};







// size 

// $('.size_option').click(function () {
//   $(this).toggleClass('sizeSelected');
//   $(this).siblings().removeClass('sizeSelected');
// });



//size toggle button 

let option = document.querySelectorAll('.size_option');

option.forEach( el => {
  el.addEventListener('click', toggleBtn)
});


function toggleBtn(el) {

  let target = el.currentTarget;

  if (target.classList.contains('sizeSelected')) {
    target.classList.remove('sizeSelected');
  }

  else {
   option.forEach( el => {
     el.classList.remove('sizeSelected');
   });

   target.classList.add('sizeSelected');

  }
}









//related product

var swiper = new Swiper(".related__product_swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1041: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});







