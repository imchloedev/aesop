    var swiper = new Swiper(".main_swiper", {
      loop: true,


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
      spaceBetween: 20,
      loop: true,

      breakpoints: {
        648 : {
          slidesPerView: 2,
        },

        1041 : {
          slidesPerView: 3,
          spaceBetween: 30,
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