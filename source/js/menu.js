const buttonOpenNav = document.querySelector('.main-header__toggle');
const nav = document.querySelector('.main-nav');
const header = document.querySelector('.main-header');
const body = document.querySelector('.page__body');

header.classList.remove('main-header--no-js');
body.classList.remove('page__body--no-js');
nav.classList.remove('main-nav--no-js');
buttonOpenNav.classList.remove('main-header__toggle--no-js');
nav.classList.add('main-nav--closed');

buttonOpenNav.onclick = function () {
  nav.classList.toggle('main-nav--opened');
  nav.classList.toggle('main-nav--closed');
  buttonOpenNav.classList.toggle('main-header__toggle--active');
};
