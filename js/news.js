

//loda more button -> show

let newsBox = document.querySelectorAll('.news_box');

const result1 = Array.from(newsBox);
const result2 = Array.from(newsBox).slice(0, 6);
const result3 = Array.from(newsBox).slice(6, 9);
const result4 = Array.from(newsBox).slice(9, 12);

// console.log(result1);

// show first 3 of them
result2.forEach(el => {
  el.style.display = 'block';
});


// show the rest of them
document.querySelector('.loadBtn').addEventListener('click', () => {

  result3.forEach(el => {
    el.style.display = 'block';
  });

  result4.forEach(el => {
    el.style.display = 'block';
  });

  if (result4.length >= 0) {
    document.querySelector('.loadBtn').style.display = 'none';
  } else {
    return false;
  }

});