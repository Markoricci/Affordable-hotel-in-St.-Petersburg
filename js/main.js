(function ($) {
  // Pre-load
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  // BackGround
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  // Offcanvas
  $(".canvas-open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".canvas-close, .offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
    $(".offcanvas-menu-overlay").removeClass("active");
  });

  // Search model
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  // Navigation
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  // Hero Slide
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false,
  });

  // Testimonial Slider
  $(".testimonial-slider").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    loop: true,
    smartSpeed: 1200,
    nav: true,
    navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
  });

  // Magnific Popup
  $(".video-popup").magnificPopup({
    type: "iframe",
  });

  // Date Picker
  $(".date-input").datepicker({
    minDate: 0,
    dateFormat: "dd MM, yy",
  });

  // Nice Select
  $("select").niceSelect();
})(jQuery);

function ClearFields() {
  document.getElementById("textInput").value = "";
  document.getElementById("textInput2").value = "";
  document.getElementById("textInput3").value = "";
}

document.getElementById("clearButton").onclick = function (e) {
  document.getElementById("textInput").value = "";
};
