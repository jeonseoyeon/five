$(function () {
  //   메인비주얼
  $(".slide").slick({
    infinite: true,
    slidesToShow: 1, //한번에 보여줄 슬라이드 아이템 개수
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    speed: 1300,
  });

  //메인비주얼 링크연결
  $(".after_arrow0, .after_arrow1").click(function () {
    window.location.href = "./sub/sub_book.html"; // 원하는 링크로 변경
  });
  $(".after_arrow2").click(function () {
    window.location.href = "./sub/sub_login.html"; // 원하는 링크로 변경
  });

  // 베스트도서
  // 초기 슬라이드에서 첫 번째 텍스트를 보여줌
  $(".slide2 .slide2-1:first .book_text").show(); // show()로 변경

  $(".slide2").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    variableWidth: true,
    prevArrow: $("#prevBtn1"),
    nextArrow: $("#nextBtn1"),
    speed: 800,
  });
  // 슬라이드 변경 이벤트
  $(".slide2").on("afterChange", function (event, slick, currentSlide) {
    // 모든 .book_text를 숨김
    $(".book_text").fadeOut(300);
    // 현재 슬라이드의 .book_text를 부드럽게 나타냄
    $(slick.$slides[currentSlide]).find(".book_text").fadeIn(300);
  });

  // 신규도서
  $(".sect3_innercon").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4.58,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    responsive: [
      {
        breakpoint: 1440,
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
        breakpoint: 938,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
