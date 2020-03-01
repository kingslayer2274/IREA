$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  center: true,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      loop: false
    }
  },
  navText: [
    "<i class='fas fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ]
});

$(document).ready(function() {
  $(document).scroll(function() {
    if ($(document).width() < 500) {
      $(".text-right").addClass("mt-4");
      $(".text-right").removeClass("text-right");
    }
  });
});
