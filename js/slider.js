"use strict";

const homeBgImages = Array.from(document.querySelectorAll(".home__bg-img"));
const dots = document.querySelector(".dots");
const dot = Array.from(document.querySelectorAll(".dot"));

let slideIndex = 0;
let slideInterval;

function resetDots() {
  dot.forEach((dot) => {
    dot.classList.remove("active");
  });
}

function resetAll() {
  resetDots();
  homeBgImages.forEach((img) => img.classList.remove("active"));
}

const updateSlideIndex = function () {
  slideIndex++;
  if (slideIndex >= homeBgImages.length) slideIndex = 0;
};

function changeSlide(i) {
  homeBgImages[i].classList.add("active");
}

function changeDot(i) {
  dot[i].classList.add("active");
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

dots.addEventListener("click", (e) => {
  const clickedDot = e.target.closest(".dot");
  if (!clickedDot || clickedDot.classList.contains("active")) return;
  resetAll();
  stopSlider();
  slideIndex = clickedDot.dataset.bgDot;
  changeDot(slideIndex);
  changeSlide(slideIndex);
  startSlider();
});

startSlider();