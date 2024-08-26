$(function () {
  //검색창 열기
  $("#showSearch").click(function () {
    $("#search_form").css({
      opacity: "1",
      height: "280px",
    });
  });
  //검색창 닫기
  $("#hideSearch").click(function () {
    $("#search_form").css({
      opacity: "0",
      height: "0px",
    });
  });
  // 업버튼
  $(".up_button").on("click", function (event) {
    //a태그의 기본 이벤트 제거
    event.preventDefault();
    //부드러운 화면 스크롤
    //html태그를 선택하여 움직임을 준다. 이때 scrollTop의 위치를 0px자리로 이동. 1초동안 1000 = 1
    $("html").animate({ scrollTop: 0 }, 1000);
  });

  //좋아요 팝업창
  $(".heart_popup_btn").on("click", function () {
    $(".heart_popup").css("opacity", "1");
  });
  $(".x_blue_btn1, .cancle_btn").on("click", function (event) {
    event.preventDefault();
    $(".heart_popup").css("opacity", "0");
  });

  //장바구니 팝업창
  $(".shopping_popup_btn, .shopping_icon").on("click", function () {
    $(".shopping_popup").css("opacity", "1");
  });
  $(".x_blue_btn2, .cancle_btn2").on("click", function (event) {
    event.preventDefault();
    $(".shopping_popup").css("opacity", "0");
  });
});
