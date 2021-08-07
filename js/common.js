$(document).ready(function () {
  $('.auto-row').slick({
    infinite: true,
    variableWidth: true,
    swipe: true,
    centerMode: true,
    slidesToShow: 1,
    prevArrow: $('.section-arrow__left'),
    nextArrow: $('.section-arrow__right'),
  });
})