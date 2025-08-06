$(document).ready(() => {
   const totalSlides = $('.slide').length;
   let currentSlide = 0;

   $('.slide:first-child').addClass('active');

   function rotateSlider() {
    $('.slide').removeClass('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    $('.slide').eq(currentSlide).addClass('active');
   
  }
  setInterval(rotateSlider, 4000);

});


