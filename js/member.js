let birth = document.querySelectorAll('.birth_info');

birth.forEach(el => {
  
  el.addEventListener('focus', function () {
    document.querySelector('.create_birth_box').classList.add('focus_active');
  });

  el.addEventListener('blur', function () {
    document.querySelector('.create_birth_box').classList.remove('focus_active');
  });

});

