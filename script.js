$(document).ready(() => {

   const totalSlides = $('.slide').length;
   let currentSlide = 0;

   //Set up the first slide
   $('.slide:first-child').addClass('active');
   generatePaginationDots();

   //rotate slider function 
   function rotateSlider() {
    $('.slide').removeClass('active');
    $('.dot').removeClass('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    $('.slide').eq(currentSlide).addClass('active');
    $('.dot').eq(currentSlide).addClass('active');
   
  }

  //generate dots function 
  function generatePaginationDots() {
    for (let i = 0; i < totalSlides; i++) {
      $('.slider-pagination').append('<div class="dot"></div>');
    }
    $('.dot:first-child').addClass('active');
  }
  //handle dot click function
  $('.dot').on('click', function() {
    currentSlide = $(this).index();
    $('.slide').removeClass('active');
    $('.dot').removeClass('active');
    $('.slide').eq(currentSlide).addClass('active');
    $('.dot').eq(currentSlide).addClass('active');
  });

  let sliderInterval = setInterval(rotateSlider, 4000);

  //pause slider on on hover
  $('.slider').on('mouseenter', function () {clearInterval(sliderInterval);});
  $('.slider').on('mouseleave', function () {sliderInterval = setInterval(rotateSlider, 4000);});

});


