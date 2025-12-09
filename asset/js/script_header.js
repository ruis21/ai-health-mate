
// header 메뉴 호버시 서브메뉴 및 배경 나타남 =====================
$(function () {
    $(".header__menu").on("mouseenter", function () {
        $(".header__sub-menu-list, .menu-bg").stop().slideDown();
    });

    $(".header__menu").on("mouseleave", function () {
        $(".header__sub-menu-list, .menu-bg").stop().slideUp();
    });

    // 햄버거 버튼 클릭 시 메뉴 토글 : 모바일 전용

    $(".hamburger-btn").on("click", function () {
        $(".m-header__nav").stop().slideToggle();
        $(this).toggleClass("active");
    });


    // 모바일에서 m-nav 메뉴 클릭시 서브메뉴 등장
    $(".m-header__menu > a").on("click", function (event) {
        // 서브메뉴가 있는 경우만 토글
        if ($(this).next(".m-header__sub-menu-list").length > 0) {
            event.preventDefault();
            $(this).next(".m-header__sub-menu-list").stop().slideToggle();
        }
        // 서브메뉴가 없으면 그냥 페이지 이동
    });
});
