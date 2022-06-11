//loda more button -> show

// let newsBox = document.querySelectorAll('.news_box');

// const result1 = Array.from(newsBox);
// const result2 = Array.from(newsBox).slice(0, 6);
// const result3 = Array.from(newsBox).slice(6, 9);
// const result4 = Array.from(newsBox).slice(9, 12);

// const arrResult = [result3, result4];


// // show first 3 of them
// result2.forEach(el => {
//   el.style.display = 'block';
// });


// // show the rest of them
// document.querySelector('.loadBtn').addEventListener('click', () => {

//   // result3.forEach(el => {
//   //   el.style.display = 'block';
//   // });

//   // result4.forEach(el => {
//   //   el.style.display = 'block';
//   // });


//   for (i = 0; i < 2; i++) {
//     // console.log(arrResult[i]);
//     (arrResult[i]).forEach(el => {
//       el.style.display = 'block';
//       console.log(el);
//     });
//   };


//   if (result4.length >= 0) {
//     document.querySelector('.loadBtn').style.display = 'none';
//   } else {
//     return false;
//   }

// });







const loadmore = document.querySelector('.loadBtn');

let currentItems = 6;

loadmore.addEventListener('click', (e) => {
  const elementList = document.querySelectorAll('.news_box');
  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].style.display = 'block';
    }
  }
  currentItems += 3;
  console.log(currentItems);


  // Load more button will be hidden after list fully loaded
  if (currentItems >= elementList.length) {
    event.target.style.display = 'none';
  }
});