// tab 


var swiper = new Swiper(".tab_title", {
  slidesPerView: 2.5,
  spaceBetween: 10,

  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },

    1041: {
      slidesPerView: 4,
    },
  },

});


//tabmenu

// $(document).ready(function () {
//   $(".tab_title > div > div").click(function() {
//     var idx = $(this).index();
//     $(".tab_title > div >div").removeClass("tabactive");
//     $(".tab_title > div > div").eq(idx).addClass("tabactive");
//     $(".tab_cont > div").hide();
//     $(".tab_cont > div").eq(idx).show();
//   });



//   //tab content
//   $('.question__answer > ul > li').click(function () {
//     $(this).siblings().find('p').slideUp();
//     $(this).siblings().find('span').removeClass('openAnswer');
//   });


//   $('.question__answer > ul > li span').click(function () {
//     $(this).next('p').slideToggle();
//     $(this).toggleClass('openAnswer');
//   });
// });







//tab menu


let tabTitle = document.querySelectorAll('.question__list');

let tabCont = document.querySelectorAll('.tab_cont > div');


tabTitle.forEach((element, index) => {

  element.addEventListener('click', function () {


    tabTitle.forEach(el => {
      el.classList.remove('tabactive');
    });

    element.classList.add('tabactive');


    tabCont.forEach(el => {
      el.style.display = "none";
    });

    tabCont[index].style.display = "block";

  });

});




















//tab content


let questionTitle = document.querySelectorAll('.question__answer>ul>li span');

let answer = document.querySelectorAll('.question__answer>ul>li p');


questionTitle.forEach(el => {
  el.addEventListener('click', toggleAccordion);
});



function toggleAccordion(el) {

  let targetInner = el.currentTarget.nextElementSibling.classList;
  let target = el.currentTarget;

  if (targetInner.contains('answerActive')) {
    targetInner.remove('answerActive');
    target.classList.remove('openAnswer');
  } else {
    questionTitle.forEach(el => {
      el.classList.remove('openAnswer');

      answer.forEach(el => {
        el.classList.remove('answerActive');
      });
    });

    targetInner.add('answerActive');
    target.classList.add('openAnswer');

  };

};