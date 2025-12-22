// var
const icon = document.getElementById("mypage-icon");
const menu = document.getElementById("mypage-more");


// func
function logout() {
    alert("로그아웃 되었습니다.")
}


// event
if (icon && menu) {
    icon.addEventListener("click", () => {
        const isVisible = menu.style.display === "block";
        menu.style.display = isVisible ? "none" : "block";
    });
}