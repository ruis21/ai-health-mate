
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

    /// 아이콘 active 토글
    $(this).toggleClass("active");

    // 다른 아이콘들은 active 제거
    $(".faq__board-title").not(this).removeClass("active");

    // 내용 열고 닫기
    $(".faq__board-conts").not($(this).next()).slideUp();
    $(this).next().slideToggle();

    // 리스트의 같은 인덱스 항목에만 on 클래스 추가
    const idx = $(".faq__board-title").index(this);
    $(".faq__board-list li").removeClass("on");
    $(".faq__board-list li").eq(idx).addClass("on");
});


// faq__tab-menu 드래그 스크롤 기능 ======================
const tabMenu = document.querySelector('.faq__tab-menu');

if (tabMenu) {
    let isDown = false;
    let startX;
    let scrollLeft;

    tabMenu.addEventListener('mousedown', (e) => {
        isDown = true;
        tabMenu.style.cursor = 'grabbing';
        startX = e.pageX - tabMenu.offsetLeft;
        scrollLeft = tabMenu.scrollLeft;
    });

    // document에서 mouseup 감지 (tabMenu 밖에서도)
    document.addEventListener('mouseup', () => {
        isDown = false;
        if (tabMenu) {
            tabMenu.style.cursor = 'grab';
        }
    });

    tabMenu.addEventListener('mouseleave', () => {
        isDown = false;
        tabMenu.style.cursor = 'grab';
    });

    tabMenu.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const x = e.pageX - tabMenu.offsetLeft;
        const walk = (x - startX);
        tabMenu.scrollLeft = scrollLeft - walk;
    });

    // 초기 커서 설정
    tabMenu.style.cursor = 'grab';
}