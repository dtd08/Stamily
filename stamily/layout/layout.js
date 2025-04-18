// func
function toggleMypageMenu() {
    const icon = document.getElementById("mypage-icon");
    const menu = document.getElementById("mypage-more");
  
    if (!icon || !menu) return;
  
    icon.addEventListener("click", () => {
      const isVisible = menu.style.display === "block";
      menu.style.display = isVisible ? "none" : "block";
    });
}

function loadHTML(selector, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
            if (callback) callback(); // header 로딩 완료 후 실행
        })
        .catch(error => console.error(`Error loading ${url}:`, error));
}
    


// event
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("#header", "../layout/header.html", toggleMypageMenu);
    loadHTML("#footer", "../layout/footer.html");
});