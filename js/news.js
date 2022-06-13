//load more button

const loadmore = document.querySelector('.loadBtn');

let currentItems = 6; //6 items

loadmore.addEventListener('click', (e) => {

  const elementList = document.querySelectorAll('.news_box');
  // array

  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].style.display = 'block';
    }
  }

  currentItems += 3;
  console.log(currentItems);
  // currentItems = currentItems+3 -> 9 reset

  // Load more button will be hidden after list fully loaded
  if (currentItems >= elementList.length) {
    event.target.style.display = 'none';
    document.querySelector('.load_end').style.display = "block";
  }
});


let topBtn = document.querySelector('.load_endBtn');

topBtn.addEventListener('click', function () {

  gsap.to(window, {
    duration: 0.5,
    scrollTo: {
      y: 0,
      x: 0,
    }
  });
});