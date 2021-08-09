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
  $('.trust-slider').slick({
    infinite: true,
    variableWidth: true,
    swipe: true,
    centerMode: true,
    slidesToShow: 1,
    prevArrow: $('.section-arrow__left_t'),
    nextArrow: $('.section-arrow__right_t'),
  });
  $('.transportation-row').slick({
    infinite: true,
    variableWidth: true,
    swipe: true,
    dots: true,
    slidesToShow: 1,
    prevArrow: $('.section-arrow__left_c'),
    nextArrow: $('.section-arrow__right_c'),
    mobileFirst: true,
     responsive: [
        {
           breakpoint: 1000,
           settings: "unslick"
        }
     ]
  });
  $('.cases-slider').slick({
    infinite: true,
    variableWidth: true,
    swipe: true,
    dots: true,
    slidesToShow: 1,
    prevArrow: $('.section-arrow__left_c'),
    nextArrow: $('.section-arrow__right_c'),
  });
  $('.questions-block').on('click', function() {
    $('.questions-block').removeClass('questions-block-active');
    $(this).addClass('questions-block-active');
  })
  $(".nav-list__link").on("click", function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
})