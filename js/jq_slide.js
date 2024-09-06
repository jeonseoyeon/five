$(function () {
  //   메인비주얼;
  $(".slide").slick({
    infinite: true,
    slidesToShow: 1, //한번에 보여줄 슬라이드 아이템 개수
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  });
  //   신규도서
  $(".sect3_innercon").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4.6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
