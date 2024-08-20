const burger = document.querySelector('.burger-header');

burger.addEventListener('click', () => {
  document
    .querySelector('.burger-header__icon')
    .classList.toggle('burger-header__icon_a');
  document.querySelector('.header__items').classList.toggle('header__items_a');
  document.querySelector('.wrapper').classList.toggle('wrapper_b');
});
