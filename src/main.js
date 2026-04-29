const burger = document.querySelector('.burger');
const closeButton = document.querySelector('.close-button');
const modal = document.querySelector('.modal-section');

burger.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('is-open');
});