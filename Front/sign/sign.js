// variable
/// sign up
const upWrap = document.getElementById("signup-wrap");
const upInfoBox = document.getElementById("signup-box");
const upToggleBox = document.getElementsByClassName("toggle-box")[1];
const upToggleBtn = document.querySelector("#signup-toggle > span");
const upSubmit = document.querySelector("#signup-form .sign-btn");

/// sign in
const inWrap = document.getElementById("signin-wrap");
const inInfoBox = document.getElementById("signin-box");
const inToggleBox = document.getElementsByClassName("toggle-box")[0];
const inToggleBtn = document.querySelector("#signin-toggle > span");
const inSubmit = document.querySelector("#signin-form .sign-btn");

upWrap.style.display = "none";
inWrap.style.display = "flex";





// func
/// === 로그인/회원가입 전환 ===
/// 로그인 창 끄기
function invisibleSignin() {
    inInfoBox.classList.add("hidden-left");
    upToggleBox.classList.add("hidden-right");
    
    setTimeout(() => {
        inInfoBox.style.display = "none";
        upToggleBox.style.display = "none";
        inWrap.style.display = "none";
    }, 600);
}

/// 회원가입 창 끄기
function invisibleSignup() {
    upInfoBox.classList.add("hidden-right");
    inToggleBox.classList.add("hidden-left");
    
    setTimeout(() => {
        upInfoBox.style.display = "none";
        inToggleBox.style.display = "none";
        upWrap.style.display = "none";
    }, 600);
}

/// 로그인 창 켜기
function visibleSignin() {
    inInfoBox.classList.remove("hidden-left");
    upToggleBox.classList.remove("hidden-right");

    setTimeout(() => {
        inInfoBox.style.display = "block";
        upToggleBox.style.display = "block";
        inWrap.style.display = "flex";
    }, 700);
}

/// 회원가입 창 켜기
function visibleSignup() {
    upInfoBox.classList.remove("hidden-right");
    inToggleBox.classList.remove("hidden-left");

    setTimeout(() => {
        upInfoBox.style.display = "block";
        inToggleBox.style.display = "block";
        upWrap.style.display = "flex";
    }, 700);
}


/// === 유효성 검사 ===

/// 로그인 시 유효성 검사
function signin() {

}

/// 회원가입 시 유효성 검사
function signup() {
    const form = document.getElementById("signup-form");

    if(!form.job.value) {
        form.job.style.border = "3px solid red";
        return false;
    }
}




// event
/// 로그인 버튼 누르면 (회원가입 -> 로그인)
inToggleBtn.addEventListener("click", () => {
    invisibleSignup();
    visibleSignin();
});

/// 회원가입 버튼 누르면 (로그인 -> 회원가입)
upToggleBtn.addEventListener("click", () => {
    invisibleSignin();
    visibleSignup();
});

