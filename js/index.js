
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

      $('.footer_nav >ul >li').click(function () {
        $(this).find('.footernav_inner').slideToggle();
        $(this).siblings().find('.footernav_inner').slideUp();
        $(this).find('.footer_head').toggleClass('footernavOpen');
        $(this).siblings().find('.footer_head').removeClass('footernavOpen');
      })


    });