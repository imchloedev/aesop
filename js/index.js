//scroll event script


function scrollProgress() {
  let scrollTop = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset) + window.innerHeight;

  //forEach()
  document.querySelectorAll(".content__item").forEach(item => {
    scrollTop > item.offsetTop ? item.classList.add("show") : item.classList.remove("show");
  });

};

window.addEventListener("scroll", scrollProgress);





// header 

const showAnim = gsap.from('header', {
  yPercent: -100,
  paused: true,
  duration: 0.5
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});

var nav = document.getElementsByClassName('header');

window.onscroll = function sticky() {
  if (window.pageYOffset > nav[0].offsetTop) {
    nav[0].classList.add('headerTop');
  } else {
    nav[0].classList.remove('headerTop');
  }
};


// cart item added button

// document.querySelector('.cartBtn').addEventListener('click', () => {
//   document.querySelector('.cartadded').classList.add('cartnew');
// });



//main swiper

var swiper = new Swiper(".main_swiper", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },


  pagination: {
    el: ".swiper-pagination",
    // type: "progressbar",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },

  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//notice

var noticeswiper = new Swiper(".notice_swiper", {
  loop: true,
  speed: 4000,
  // direction: "vertical",
  // freeMode: true,
  slidesPerView: '3',
  spaceBetween: 0,
  // allowTouchMove: false,
  // touchRatio: 0,
  
  

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

});






// search

// $(document).ready(function () {
//   $('.search').click(function () {
//     $('.searchWindow').fadeIn();
//   });

//   $('.search_closeBtn').click(function () {
//     $('.searchWindow').fadeOut();
//   });

//   $('.nav_btn_mobile').click(function () {
//     $('.gnb').toggleClass('gnbOpen');
//     $(this).find('button').toggleClass('navOpen');
//   });

// });


// fade in and out 적용하기

document.querySelector('.search').addEventListener('click', () => {
  document.querySelector('.searchWindow').classList.add('searchWindow_fadeIn');
});

document.querySelector('.search_closeBtn').addEventListener('click', () => {
  document.querySelector('.searchWindow').classList.remove('searchWindow_fadeIn');
});

document.querySelector('.nav_btn_mobile').addEventListener('click', () => {
  document.querySelector('.gnb').classList.toggle('gnbOpen');
  document.querySelector('.nav_btn_mobile button').classList.toggle('navOpen');
});





// popular

var swiper = new Swiper(".popular_swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },

    1041: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#popular-next",
    prevEl: "#popular-prev",
  },
});





// location

var swiper = new Swiper(".location_swiper", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,

  breakpoints: {
    648: {
      slidesPerView: 1.5,
    },

    1041: {
      slidesPerView: 2,
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




// footer 

$(document).ready(function () {

  $('.footer_head').click(function () {
    $(this).next('.footernav_inner').slideToggle();
    $(this).toggleClass('footernavOpen');
  });

  $('.footer_nav >ul >li').click(function () {
    $(this).siblings().find('.footernav_inner').slideUp();
    $(this).siblings().find('.footer_head').removeClass('footernavOpen');
  });

});






// var footerHead = document.querySelector('.footer_head');

// document.querySelectorAll('.footer_head').forEach(() => {



// });



// footerHead.addEventListener('click', () => {
//   document.querySelector('.footernav_inner').classList.toggle('footerInner_open');

// });





// document.querySelectorAll('.footer_head').forEach((element, index) => {
//   console.log(element, index);

// });