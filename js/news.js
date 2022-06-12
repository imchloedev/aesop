

//load more button

const loadmore = document.querySelector('.loadBtn');

let currentItems = 6; //6개가 보여짐

loadmore.addEventListener('click', (e) => {

  const elementList = document.querySelectorAll('.news_box');
  // array로 저장


  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].style.display = 'block';
    }
  }


  currentItems += 3;
  console.log(currentItems);
  // currentItems = currentItems+3 -> 9로 리셋


  // Load more button will be hidden after list fully loaded
  if (currentItems >= elementList.length) {
    event.target.style.display = 'none';
  }
});