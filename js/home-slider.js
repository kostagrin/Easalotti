"use strict";

const homeBgImages = Array.from(document.querySelectorAll(".home__bg-img"));
const homeDots = document.querySelector(".home__dots");
const homeDot = Array.from(document.querySelectorAll(".home__dot"));

let slideIndex = 0;
let slideInterval;

function resetDots() {
  homeDot.forEach((dot) => {
    dot.classList.remove("alive");
  });
}

function resetAll() {
  resetDots();
  homeBgImages.forEach((img) => img.classList.remove("alive"));
}

const updateSlideIndex = function () {
  slideIndex++;
  if (slideIndex >= homeBgImages.length) slideIndex = 0;
};

function changeSlide(i) {
  homeBgImages[i].classList.add("alive");
}

function changeDot(i) {
  homeDot[i].classList.add("alive");
}

function updateBg(i) {
  resetAll();
  updateSlideIndex();
  changeSlide(i);
  changeDot(i);
}

function startSlider() {
  slideInterval = setInterval(() => {
    updateBg(slideIndex);
  }, 5000);
}

function stopSlider() {
  clearInterval(slideInterval);
}

homeDots.addEventListener("click", (e) => {
  const clickedDot = e.target.closest(".dot");
  if (!clickedDot || clickedDot.classList.contains("alive")) return;
  resetAll();
  stopSlider();
  slideIndex = clickedDot.dataset.bgDot;
  changeDot(slideIndex);
  changeSlide(slideIndex);
  startSlider();
});

startSlider();
