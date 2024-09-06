$(function () {
  // 'checkall' 체크박스를 클릭했을 때
  $("#checkall").on("change", function () {
    // 'checkall'의 체크 상태에 따라 나머지 체크박스들의 상태를 동일하게 설정
    $(".checknum1").prop("checked", this.checked);
    $(".checknum2").prop("checked", this.checked);
    $(".checknum3").prop("checked", this.checked);
  });
  // checknum1 체크박스의 체크 상태가 해제되면 checkall 해제
  $("#checknum1").on("change", function () {
    // checknum1이 체크 해제되면 checkall도 해제
    if (!$(this).is(":checked")) {
      $("#checkall").prop("checked", false);
    }
  });
  // checknum2 체크박스의 체크 상태가 해제되면 checkall 해제
  $("#checknum2").on("change", function () {
    // checknum2이 체크 해제되면 checkall도 해제
    if (!$(this).is(":checked")) {
      $("#checkall").prop("checked", false);
    }
  });
  // checknum3 체크박스의 체크 상태가 해제되면 checkall 해제
  $("#checknum3").on("change", function () {
    // checknum1이 체크 해제되면 checkall도 해제
    if (!$(this).is(":checked")) {
      $("#checkall").prop("checked", false);
    }
  });
  // 선택상품 삭제 버튼 클릭 이벤트
  $(".select_btn").on("click", function () {
    // 체크된 체크박스에 해당하는 tr을 삭제
    $("input[type='checkbox']:checked").each(function () {
      // 체크박스가 포함된 tr을 가져옵니다.
      var $row = $(this).closest("tr");

      // 첫 번째 tr(헤더 행)은 삭제하지 않도록 조건 체크
      if ($row.index() !== 0) {
        // 인덱스가 0이 아니면 삭제
        $row.remove();
      }
    });

    // 모든 행이 삭제되었는지 확인 후 checkall 해제
    if ($("table tr").length === 1) {
      // 헤더 행만 남아있다면
      $("#checkall").prop("checked", false); // checkall 체크 해제
    }
  });

  //   장바구니 가격
  const prices = {
    checknum1: 15200, // checknum1의 가격
    checknum2: 10900, // checknum2의 가격
    checknum3: 13000, // checknum3의 가격
  };

  // 초기 총 가격 계산 및 설정
  let totalPrice = prices.checknum1 + prices.checknum2 + prices.checknum3;
  $(".price span").text(totalPrice.toLocaleString()); // 초기 가격 표시

  // 체크박스 상태가 변경될 때마다 가격 계산
  $(".td_check input[type='checkbox']").on("change", function () {
    totalPrice = 0; // 총 가격 초기화

    // checkall 체크박스 상태 확인
    if ($("#checkall").is(":checked")) {
      // checkall이 체크된 경우 모든 가격 합산
      totalPrice = prices.checknum1 + prices.checknum2 + prices.checknum3;
    } else {
      // 각 체크박스를 확인하여 체크된 경우 가격을 더함
      if ($("#checknum1").is(":checked")) {
        totalPrice += prices.checknum1;
      }
      if ($("#checknum2").is(":checked")) {
        totalPrice += prices.checknum2;
      }
      if ($("#checknum3").is(":checked")) {
        totalPrice += prices.checknum3;
      }
    }

    // 가격을 span에 업데이트
    $(".price span").text(totalPrice.toLocaleString()); // 천 단위 구분 기호 추가
  });

  // checkall 체크박스 상태 변경 시 처리
  $("#checkall").on("change", function () {
    // 모든 개별 체크박스를 checkall 상태에 맞게 설정
    $(".td_check input[type='checkbox']")
      .prop("checked", this.checked)
      .trigger("change");
  });

  // 체크박스 상태가 변경될 때마다 체크된 갯수 계산
  $(".td_check input[type='checkbox']").on("change", function () {
    // 체크된 갯수를 계산
    let checkedCount = $(".td_check input[type='checkbox']:checked").length;

    // 체크된 갯수를 top_box_2의 span에 업데이트
    $(".top_box_2 span").text(checkedCount); // 체크된 갯수를 span에 할당
  });

  // 초기 체크된 갯수 설정 (페이지 로드 시)
  let initialCheckedCount = $(
    ".td_check input[type='checkbox']:checked"
  ).length;
  $(".top_box_2 span").text(initialCheckedCount); // 초기 체크된 갯수를 span에 할당
});
