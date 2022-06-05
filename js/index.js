





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











$(document).ready(function () {

  $('.cartBtn').click(function () {
    $('.cartadded').addClass('cartnew');
  });

});






var swiper = new Swiper(".main_swiper", {
  loop: true,
  speed: 1000,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },


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




// search

$(document).ready(function () {


  $('.search').click(function () {
    $('.searchWindow').fadeIn();
  });

  $('.search_closeBtn').click(function () {
    $('.searchWindow').fadeOut();
  });


  $('.nav_btn_mobile').click(function () {
    $('.gnb').toggleClass('gnbOpen');
    $(this).find('button').toggleClass('navOpen');
  });


});




// popular

var swiper = new Swiper(".popular_swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,

  breakpoints: {
    648: {
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
    $(this).siblings('.footernav_inner').slideToggle();
    $(this).toggleClass('footernavOpen');
  });

  $('.footer_nav >ul >li').click(function () {
    $(this).siblings().find('.footernav_inner').slideUp();
    $(this).siblings().find('.footer_head').removeClass('footernavOpen');
  });

});