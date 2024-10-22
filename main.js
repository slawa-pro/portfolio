// close loader
//window.close = function() {
  //document.querySelector('.loader-wrapper').style.display = 'none';
//};

// burger
const burgerMenu = document.getElementById('burgerMenu');
const mobileBurgerMenu = document.getElementById('mobileBurgerMenu');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('change');
  mobileBurgerMenu.classList.toggle('show');
});