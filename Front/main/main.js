// variable
const mypageIcon = document.getElementsByClassName("mypage-icon")[0];
const mypageMore = document.getElementsByClassName("mypage-more")[0];


// func


// events
mypageIcon.addEventListener("click", () => {
    if(mypageMore.style.display == "none") mypageMore.style.display = "block";
    else mypageMore.style.display = "none";
});
