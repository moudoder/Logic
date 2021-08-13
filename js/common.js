$(document).ready(function () {
  new WOW().init();
  $('.btn-call').on('click', function() {
    $('.modal-window').addClass('modal-window-active');
    $('.dark-window').addClass('dark-window-active');
    $('.mobile-menu').removeClass('mobile-menu-active');
    return false;
  })
  $('.body-menu-item__form').on('click', function() {
    $('.job-block-modal').addClass('job-block-modal-active');
    $('.dark-window').addClass('dark-window-active');
    return false;
  })
  $('.job-way-block').on('click', function() {
    $('.job-way-block').removeClass('job-way-block-active');
    $(this).addClass('job-way-block-active');
  })
  $('.contacts-block').on('click', function() {
    $('.contacts-block').removeClass('contacts-block-active');
    $(this).addClass('contacts-block-active');
  })
  $('.contacts-right-wrapper').slick({
    infinite: true,
    swipe: true,
    slidesToShow: 1,
  });
  $('.contacts-block-1').on('click', function() {
    $('.contacts-right-wrapper').slick('slickGoTo', 0);
  })
  $('.contacts-block-2').on('click', function() {
    $('.contacts-right-wrapper').slick('slickGoTo', 1);
  })
  $('.contacts-block-3').on('click', function() {
    $('.contacts-right-wrapper').slick('slickGoTo', 2);
  })
  $('.dark-window').on('click', function() {
    $('.modal-window').removeClass('modal-window-active');
    $('.job-block-modal').removeClass('job-block-modal-active');
    $('.dark-window').removeClass('dark-window-active');
    return false;
  })
  $('.modal-window__close').on('click', function() {
    $('.job-block-modal').removeClass('job-block-modal-active');
    $('.modal-window').removeClass('modal-window-active');
    $('.dark-window').removeClass('dark-window-active');
    return false;
  })
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
  let nav = $('.nav-abc');
  $(window).scroll(function() {
    let scroll = $(window).scrollTop() + $(window).height();
    //Если скролл до конца елемента
    //var offset = $element.offset().top + $element.height();
    //Если скролл до начала елемента
    let offset = $element.offset().top
   
    if (scroll > offset) {
      $(nav).addClass('nav-abc-active');
    }
    else{
      $(nav).removeClass('nav-abc-active');
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