    var swiper = new Swiper(".main_swiper", {
      loop: true,


      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
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