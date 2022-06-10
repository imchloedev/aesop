// $(function () {
// 		$(".col-md-4").slice(0, 3).show();
// 		$("body").on('click touchstart', '.load-more', function (e) {
// 			e.preventDefault();
// 			$(".col-md-4:hidden").slice(0, 3).slideDown();
// 			if ($(".col-md-4:hidden").length == 0) {
// 				$(".load-more").css('visibility', 'hidden');
// 			}
// 			$('html,body').animate({
// 				scrollTop: $(this).offset().top
// 			}, 1000);
// 		});
// 	});





let newsBox = document.querySelectorAll('.news_box');

const result2 = Array.from(newsBox).slice(0, 3);

console.log(result2);


result2.forEach(el => {
  el.style.display = 'block';
});



