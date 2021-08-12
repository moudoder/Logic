$(document).ready(function () {
  new WOW().init();
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
  $('.compleks-row').slick({
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
  $('.scheme-row').slick({
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
    $('.mobile-menu').removeClass('mobile-menu-active');
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
  $('.header-nav__menu_mob').on('click', function() {
    $('.mobile-menu').addClass('mobile-menu-active');
    return false;
  })
  $('.mobile-menu__close').on('click', function() {
    $('.mobile-menu').removeClass('mobile-menu-active');
    return false;
  })
  let $element = $('#auto');
  let nav = $('.header-nav');
  $(window).scroll(function() {
    let scroll = $(window).scrollTop() + $(window).height();
    //Если скролл до конца елемента
    //var offset = $element.offset().top + $element.height();
    //Если скролл до начала елемента
    let offset = $element.offset().top
   
    if (scroll > offset) {
      $(nav).addClass('nav-fixed');
    }
    else{
      $(nav).removeClass('nav-fixed');
    }
  });

  
})
function windowSize(){
    if ($(window).width() <= '995'){
        $('.trust-slide').unwrap();
        $('.auto-block').unwrap();
    } else {
        
    }
}
windowSize()