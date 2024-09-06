$(function () {
  $(".slide").slick({
    infinite: true,
    slidesToShow: 1, //한번에 보여줄 슬라이드 아이템 개수
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });
});
