//Slider
const owl = $('.owl-carousel');

owl.owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  startPosition: 1,
  items: 1,
  responsive : {
    500 : {
      items: 3,
    },
    1200 : {
      margin: 30,
      items: 3,
    },
  }
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});


//Menu Icon
const navButton = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navButton.onclick = function(){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll')
}