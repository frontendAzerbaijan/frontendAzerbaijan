$(".slider-top").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-bottom",
});


$(".slider-bottom").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-top",
  dots: true,
  focusOnSelect: true,
});

