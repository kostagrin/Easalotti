'use strict';
const siteContainer = document.querySelector('.site-container');
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalBtn = document.querySelector('.home__btn');
const closeModalBtn = document.querySelector('.close-modal');

function openModal() {
  modalWindow.classList.remove('modal--hidden');
  overlay.classList.remove('overlay--hidden');
}

function closeModal() {
  modalWindow.classList.add('modal--hidden');
  overlay.classList.add('overlay--hidden');
}

modalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
