//scroll event script

function scrollProgress() {
  let scrollTop = (document.documentElement.scrollTop || window.scrollY || window.pageYOffset) + window.innerHeight;

  //forEach
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



//main swiper

var swiper = new Swiper(".main_swiper", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,

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




//mobile nav button
document.querySelector('.nav_btn_mobile').addEventListener('click', () => {
  document.querySelector('.gnb').classList.toggle('gnbOpen');
  document.querySelector('.nav_btn_mobile button').classList.toggle('navOpen');
  document.querySelector('.body').classList.toggle('bodyfixed');
});



// search

document.querySelector('.search').addEventListener('click', () => {
  document.querySelector('.searchWindow').classList.add('searchWindow_fadeIn');
  document.querySelector('.body').classList.add('bodyfixed');

  //a stagger reveal animation
  document.querySelectorAll('.suggested a').forEach(el => {
    el.classList.add('stagger_active');
  });

  //when gnb opened, open searh -> reset gnb, navbtn 
  document.querySelector('.gnb').classList.remove('gnbOpen');
  document.querySelector('.nav_btn_mobile button').classList.remove('navOpen');

});


document.querySelector('.search_closeBtn').addEventListener('click', () => {
  document.querySelector('.searchWindow').classList.remove('searchWindow_fadeIn');
  document.querySelector('.body').classList.remove('bodyfixed');
});



//suggested a > input value
let keyword = document.querySelectorAll('.suggested a');
let keySearch = document.querySelector('.searchBox input');

keyword.forEach(el => {
  el.addEventListener('click', function () {
    keySearch.value = el.innerText;
  });
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



//add to cart button
//added to cart modal

const cartModal = document.getElementById('cart_modal');

document.querySelectorAll('.cartBtn').forEach(el => {

  el.addEventListener('click', function () {

    cartModal.classList.add('modal_show')

    setTimeout(() => {
      cartModal.classList.remove('modal_show')
    }, 1500);

  });
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



//footer

let footertitle = document.querySelectorAll('.footer_head');
let footerinner = document.querySelectorAll('.footernav_inner');


footertitle.forEach(el => {
  el.addEventListener('click', toggleAccordion);
});


function toggleAccordion(el) {

  let targetInner = el.currentTarget.nextElementSibling.classList;
  let target = el.currentTarget;

  if (targetInner.contains('footernav_inner_active')) {
    targetInner.remove('footernav_inner_active');
    target.classList.remove('footernavOpen');
  } else {
    footertitle.forEach(el => {
      el.classList.remove('footernavOpen');

      footerinner.forEach(el => {
        el.classList.remove('footernav_inner_active');
      });
    });

    targetInner.add('footernav_inner_active');
    target.classList.add('footernavOpen');

  };

};