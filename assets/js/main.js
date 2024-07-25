$(document).ready(function () {
  $(".offcanvas-body .mobile-nav").click(function(e){
    $('.offcanvas').removeClass('show');
    $('.offcanvas-backdrop').removeClass('show');
    $('body').removeAttr('style');
  });
});

/********* Hero Slider Index Page JS **********/
$('#hero-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
  }
})

$('#colleges-slider').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
})

$('#featured-slider').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
  }
})

$('.inner-counter').each(function () {
  var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
  $(this).prop('Counter', 0).animate({
     Counter: $(this).text()
  }, {
     duration: 5000,
     step: function (func) {
        $(this).text(parseFloat(func).toFixed(size));
     }
  });
});