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
      loop: true
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

$(document).ready(function() {
  $(".fancybox-button").fancybox({
    prevEffect: "none",
    nextEffect: "none",
    closeBtn: false,
    nextClick: true,
    helpers: {
      title: { type: "inside" },
      buttons: {}
    }
  });
});

$("body").scrollspy({ target: "#navbarNav" });

// Add smooth scrolling
$("#navbarNav a").on("click", function(e) {
  // Check for a hash value
  if (this.hash !== "") {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});
