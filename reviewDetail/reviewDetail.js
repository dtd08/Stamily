// variable
/// 후기 작성
const writeBtn = document.getElementById("write-btn");
const wrtieCancleBtn = document.getElementById("write-cancle");
const wrtieSubmitBtn = document.getElementById("write-submit");
const writeContent = document.getElementById("write-content");

/// 추가메뉴
const reviewMenus = document.querySelectorAll(".menu");


// event
/// 모달창 열기 / 닫기
writeBtn.addEventListener("click", () => {
    document.getElementById("modal-wrap").style.display = "block";
    writeContent.value = "";
});

wrtieCancleBtn.addEventListener("click", () => {
    if (writeContent.value.trim() !== "") {
        const confirmClose = confirm("작성된 내용이 저장되지 않습니다. 정말 닫을까요?");
        if (!confirmClose) return;
    }
    document.getElementById("modal-wrap").style.display = "none";
});


/// 추가메뉴 열기 / 닫기
reviewMenus.forEach(menu => {
    menu.addEventListener("click", () => {
        const menuDetail = menu.nextElementSibling;  // 형제 선택
        let visible = menuDetail.style.display === "none" ? "block" : "none";
        
        menuDetail.style.display = visible;
    });
});
