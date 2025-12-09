
// faq__menu 클릭시 faq__board 내용이 등장 ======================
$(".faq__menu").on("click", function (e) {
    let idx = $(this).index();

    // 스크롤 튕김 방지
    e.preventDefault();
    $(".faq__menu").removeClass("on");
    $(this).addClass("on");

    $(".faq__board > div").hide();
    $(".faq__board > div").eq(idx).show();
});


// faq title 클릭 시 contents 등장
$(".faq__board-title").on("click", function (e) {
    // 스크롤 튕김 방지
    e.preventDefault();

    // 현재 클릭한 요소 외 나머지 닫기
    $(".faq__board-conts").not($(this).next()).slideUp();

    // 현재 요소 토글
    $(this).next().slideToggle();

    // 리스트의 같은 인덱스 항목에만 on 클래스 추가
    const idx = $(".faq__board-title").index(this);
    $(".faq__board-list li").removeClass("on");
    $(".faq__board-list li").eq(idx).addClass("on");
});