$(function () {
  //   메인비주얼
  $(".slide").slick({
    infinite: true,
    slidesToShow: 1, //한번에 보여줄 슬라이드 아이템 개수
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // 베스트도서
  // 중앙 슬라이드의 텍스트를 초기화
  $(".slide2-1").eq(1).find(".book_text").css("display", "block");
  $(".slide2-1").eq(0).find(".book_text_box").css("width", "316px");

  // 슬릭 슬라이더 초기화
  $(".slide2").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    variableWidth: true,
    prevArrow: $("#prevBtn1"),
    nextArrow: $("#nextBtn1"),
    cssEase: "ease-out",
    cssEase: "cubic-bezier(0.25, 0.1, 0.7, 1)",
    speed: 1000,
  });

  // 슬릭 초기화 후 중앙 슬라이드의 텍스트 표시
  $(".slide2").on("init", function (event, slick) {
    toggleBookText(); // 슬라이더가 초기화된 후 중앙 슬라이드 텍스트 처리
  });

  // 슬라이드 변경 시 중앙 슬라이드 텍스트 업데이트
  $(".slide2").on("afterChange", function (event, slick, currentSlide) {
    fade_on();
    toggleBookText(); // 슬라이드 변경 후 중앙 슬라이드 텍스트 처리
  });

  // 중앙 슬라이드의 텍스트만 보이게 처리하는 함수
  function toggleBookText() {
    // 이전 슬라이드 book_text숨기기

    $(".slide2-1.slick-center").prev().find(".book_text").fadeOut(100);

    $(".slide2-1.slick-center")
      .next()
      .find(".book_text_box")
      .css("width", "884px");
  }

  //나타나는 함수
  function fade_on() {
    // slick-center 클래스를 가진 슬라이드의 .book_text만 보이게 함
    $(".slide2-1.slick-center").find(".book_text_box").css({ width: "884px" });
    $(".slide2-1.slick-center .book_text").fadeIn(500);
    $(".slide2-1.slick-center").next().find(".book_text").fadeOut(100);
  }

  // 신규도서
  $(".sect3_innercon").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4.58,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
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
