'use strict';
$(document).ready(function() {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    // adaptiveHeight: true,
    centerMode: true,
    centerPadding: 0,
    variableWidth: true
  });
});