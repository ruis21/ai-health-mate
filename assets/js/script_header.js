
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
        $(".m-header__menu").removeClass("is-open");
        $(".m-header__sub-menu-list").slideUp();
    });


    // 모바일에서 m-nav 메뉴 클릭시 서브메뉴 등장
    // .line이 a와 ul 사이에 있어도 서브메뉴를 찾을 수 있도록 nextAll 사용
    $(".m-header__menu > a").on("click", function (event) {
        var $subList = $(this).nextAll(".m-header__sub-menu-list").first();
        var $menuLi = $(this).closest(".m-header__menu");
        if ($subList.length > 0) {
            event.preventDefault();
            $subList.stop().slideToggle();
            $menuLi.toggleClass("is-open");
        }
        // 서브메뉴가 없으면 그냥 페이지 이동
    });
});
