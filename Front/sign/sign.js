// variable
/// sign in
const inWrap = document.getElementById("signin-wrap");
const inInfoBox = document.getElementById("signin-box");
const inToggleBox = document.getElementsByClassName("toggle-box")[0];
const inToggleBtn = document.querySelector("#signin-toggle > span");
const inForm = document.getElementById("signinForm");
const inSubmit = document.querySelector("#signinForm .sign-btn");

/// sign up
const upWrap = document.getElementById("signup-wrap");
const upInfoBox = document.getElementById("signup-box");
const upToggleBox = document.getElementsByClassName("toggle-box")[1];
const upToggleBtn = document.querySelector("#signup-toggle > span");
const upForm = document.getElementById("signupForm");
const upSubmit = document.querySelector("#signupForm .sign-btn");
const upGradu = document.getElementById("gradu");

upWrap.style.display = "none";
inWrap.style.display = "flex";
upGradu.style.display = "none";

/// 유효성 검사 변수
jobChk = false;
nameChk = false;
nicknameChk = false;
pwChk = false;
pwcChk = false;
emailChk = false;
phoneChk = false;
graduChk = false;


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

    inForm.job[0].checked = false;
    inForm.job[1].checked = false;

    inForm.name.value = '';
    inForm.nickname.value = '';
    inForm.password.value = '';
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
    
    upForm.job[0].checked = false;
    upForm.job[1].checked = false;
    upForm.graduStatus[0].checked = false;
    upForm.graduStatus[1].checked = false;

    upForm.name.value = '';
    upForm.nickname.value = '';
    upForm.password.value = '';
    upForm.passwordChk.value = '';
    upForm.email.value = '';
    upForm.phone.value = '';

    upGradu.style.display = "none";
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
/// 글자수 제한
function limitLen(value) {
    return value.length >= 4 && value.length <= 12
}

/// 숫자 or 영어만 허용
function onlyNumberAndEnglish(str) {
    return /^[A-Za-z0-9][A-Za-z0-9]*$/.test(str);
}

/// 비밀번호 제한
function strongPassword (str) {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

/// 비밀번호 일치 확인
function isMatch (password1, password2) {
    return password1 === password2;
}



// event
/// === submit ===
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

/// === gradu 표시 여부 ===
/// 회원가입 시 직업(학생) 선택 시
document.getElementById("u-student").addEventListener("click", () => {
    console.log("student");
    gradu.style.display = "flex";
});

document.getElementById("u-teacher").addEventListener("click", () => {
    console.log("teacher");
    document.getElementById("gradu").style.display = "none";
});

/// 모든 정보가 다 작성되면
if ((inWrap.style.display == "flex") && jobChk && nameChk && nicknameChk && pwChk) {
    inSubmit.classList.add("show");
} else {
    inSubmit.classList.remove("show");
} 

if ((upWrap.style.display == "flex") &&jobChk && nameChk && nicknameChk && pwChk && pwcChk && emailChk && phoneChk) {
    upSubmit.classList.add("show"); 
} else {
    upSubmit.classList.remove("show"); 
}

/// 이름 눌렀을 때
inForm.name.onKeyup = function() {
    if (inForm.name.value.length !== 0) {
        if (onlyNumberAndEnglish(inForm.name.value) === false) {
            console.log("영어 또는 숫자만 가능함");
        } else if (limitLen(inForm.name.value) === false) {
            console.log("글자수는 4~12자");
        } else if (onlyNumberAndEnglish(inForm.name.value) && limitLen(inForm.name.value)) {
            console.log("조건 만족");
        }
    } else {
        console.log("작성안됨");
    }
}
