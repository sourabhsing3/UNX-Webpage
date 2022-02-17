const hamburger = document.querySelector('.ham-button');
const menu = document.querySelector('nav');

hamburger.addEventListener('click', function () {
  menu.classList.toggle('open');
})


document.addEventListener('keydown', function(e){
  if(menu.classList.contains('open') && e.key === 'Escape'){
    menu.classList.remove('open');
  }
})