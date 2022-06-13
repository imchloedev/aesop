
//email send btn
document.querySelector('.customerEmail_send button').addEventListener('click', () => {
  window.confirm("Email sent!");
});



//textarea 

function counter(text, length) {
  var limit = length;
  var str = text.value.length;

  if (str > limit) {
    // document.getElementById('messagecount').innerHTML = "You ran out of all of characters";
    text.value = text.value.substring(0, limit);
    text.focus();
  }

  document.getElementById('messagecount').innerHTML = text.value.length;
}