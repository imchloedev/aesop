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

$(document).ready(function() {
  $(".tab_title > div > div").click(function() {
    var idx = $(this).index();
    $(".tab_title > div >div").removeClass("tabactive");
    $(".tab_title > div > div").eq(idx).addClass("tabactive");
    $(".tab_cont > div").hide();
    $(".tab_cont > div").eq(idx).show();
  });



  //tab content
  $('.question__answer > ul > li').click(function () {
    $(this).siblings().find('p').slideUp();
    $(this).siblings().find('span').removeClass('openAnswer');
  });


  $('.question__answer > ul > li span').click(function () {
    $(this).next('p').slideToggle();
    $(this).toggleClass('openAnswer');
  });
});

