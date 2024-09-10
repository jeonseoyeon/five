$(function () {
  //   메인비주얼;
  // $(".slide").slick({
  //   infinite: true,
  //   slidesToShow: 1, //한번에 보여줄 슬라이드 아이템 개수
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows: false,
  // });

  // 베스트도서
  $(".slide2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".btn0"),
    nextArrow: $(".btn1"),
  });

  // 신규도서
  $(".sect3_innercon").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4.6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1336,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
