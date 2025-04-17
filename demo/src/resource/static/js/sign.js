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

/// normal
const logo = document.getElementById("logo");


upWrap.style.display = "none";
inWrap.style.display = "flex";
upGradu.style.display = "none";

/// 유효성 검사 변수
inCheck = {
    job: false,
    name: false,
    nickname: false,
    pw: false,
}; // 직업, 이름, 닉네임, 비밀번호

upCheck = {
    job: false,
    name: false,
    nickname: false,
    pw: false,
    pwChk: false,
    email: false,
    phone: false,
    attended: false,
}; // 직업, 이름, 닉네임, 비밀번호, 비번체크, 이메일, 전화번호, 졸업상태

let defaultTxt = document.querySelector("#signinForm > .name > .message"); // 기본 메세지 출력창
let defaultUnderline = document.querySelector("#signinForm > .name > span"); // 기본 밑줄 표시






// func
/// === 로그인/회원가입 전환 ===
/// 로그인 창 끄기
function invisibleSignin() {
    inInfoBox.classList.add("hidden-left");
    upToggleBox.classList.add("hidden-right");

    logo.classList.add("disappear");

    setTimeout(() => {
        inInfoBox.style.display = "none";
        upToggleBox.style.display = "none";
        inWrap.style.display = "none";

        logo.classList.remove("disappear");
        logo.classList.add("to-right");
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

    logo.classList.add("disappear");

    setTimeout(() => {
        upInfoBox.style.display = "none";
        inToggleBox.style.display = "none";
        upWrap.style.display = "none";

        logo.classList.remove("disappear");
        logo.classList.remove("to-right");
    }, 600);

    upForm.job[0].checked = false;
    upForm.job[1].checked = false;
    upForm.attended[0].checked = false;
    upForm.attended[1].checked = false;

    upForm.name.value = '';
    upForm.nickname.value = '';
    upForm.password.value = '';
    upForm.checkPassword.value = '';
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
/// 내용이 적혀 있는지
function isEmpty(str) {
    return (str == undefined || str.length == 0) ? "undefined":"emp enough";
}

/// 글자수 제한
function limitLen(str, min=4, max=12) {
    return (str.trim().length >= min && str.trim().length <= max) ? "limit enough":"ttb";
}

/// 한글만 허용
function onlyKorean(str) {
    return (/^[가-힣]+$/.test(str.trim())) ? "name enough":"nko";
}

/// 숫자 or 영어만 허용
function onlyNumberAndEnglish(str) {
    return (/^[A-Za-z0-9][A-Za-z0-9]*$/.test(str.trim())) ? "eng enough":"nen";
}

/// 비밀번호 제한
function strongPassword (str) {
    // 8글자 이상, 영대소문자와 특수문자 포함
    return (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str.trim())) ? "pw enough":"nmr";
}

/// 비밀번호 일치 확인
function isMatch (password1, password2) {
    return (password1 === password2) ? "pwc enough":"nmc";
}

/// 이메일 확인
function emailValidChk(str) {
    // [숫자 or 영어]@[숫자 or 영어].[숫자 or 영어] 형태 확인
    return (/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/.test(str.trim())) ? "email enough":"cef";
}

/// 전화번호 확인
function phoneValidChk(str) {
    return (/^[\d]{2,3}-[\d]{4}-[\d]{4}$/.test(str.trim())) ? "phone enough":"cpf";
}



/// === 유효성 검사 적용 ===
/// 이름에 적용
function chkName(form) {
    let target = undefined;
    let targetChk = undefined;

    if (form == 'in') {
        target = inForm;
        targetChk = inCheck;
    }
    else if (form == 'up') {
        target = upForm;
        targetChk = upCheck;
    }

    let str = target.name.value;
    let underline = document.querySelector(`#${target.id} > .name > span`);
    let txt = document.querySelector(`#${target.id} > .name > .message`);

    targetChk["name"] = messageControl(isEmpty(str), underline, txt);
    targetChk["name"] = messageControl(onlyKorean(str), underline, txt);
}

/// 닉네임에 적용
function chkNickname(form) {
    let target = undefined;
    let targetChk = undefined;

    if (form == 'in') {
        target = inForm;
        targetChk = inCheck;
    }
    else if (form == 'up') {
        target = upForm;
        targetChk = upCheck;
    }

    let str = target.nickname.value;
    let underline = document.querySelector(`#${target.id} > .nickname > span`);
    let txt = document.querySelector(`#${target.id} > .nickname > .message`);


    targetChk["nickname"] = messageControl(isEmpty(str), underline, txt);
    targetChk["nickname"] = messageControl(limitLen(str), underline, txt);
    targetChk["nickname"] = messageControl(onlyNumberAndEnglish(str), underline, txt);
}

/// 비밀번호에 적용
function chkPw(form) {
    let target = undefined;
    let targetChk = undefined;

    if (form == 'in') {
        target = inForm;
        targetChk = inCheck;
    }
    else if (form == 'up') {
        target = upForm;
        targetChk = upCheck;
    }

    let str = target.password.value;
    let underline = document.querySelector(`#${target.id} > .password > span`);
    let txt = document.querySelector(`#${target.id} > .password > .message`);


    targetChk["pw"] = messageControl(isEmpty(str), underline, txt);
    targetChk["pw"] = messageControl(strongPassword(str), underline, txt);
}

/// 비밀번호 확인에 적용
function chkPwChk() {
    let str = upForm.checkPassword.value;
    let underline = document.querySelector(`#${upForm.id} > .password-chk > span`);
    let txt = document.querySelector(`#${upForm.id} > .password-chk > .message`);


    upCheck["pwChk"] = messageControl(isEmpty(str), underline, txt);
    upCheck["pwChk"] = messageControl(isMatch(str, upForm.password.value), underline, txt);
}

/// 이메일에 적용
function chkEmail() {
    let str = upForm.email.value;
    let underline = document.querySelector(`#${upForm.id} > .email > span`);
    let txt = document.querySelector(`#${upForm.id} > .email > .message`);


    upCheck["email"] = messageControl(isEmpty(str), underline, txt);
    upCheck["email"] = messageControl(emailValidChk(str), underline, txt);
}

/// 전화번호에 적용
function chkPhone() {
    let str = upForm.phone.value;
    let underline = document.querySelector(`#${upForm.id} > .phone > span`);
    let txt = document.querySelector(`#${upForm.id} > .phone > .message`);


    upCheck["phone"] = messageControl(isEmpty(str), underline, txt);
    upCheck["phone"] = messageControl(phoneValidChk(str), underline, txt);
}

/// 에러 메세지 조정
function messageControl(errorMessage, underline=defaultUnderline, txt=defaultTxt, min=4, max=12) {
    console.log(errorMessage);

    switch (errorMessage) {
        case "undefined":  // no name, nickname, password, etc... , 아무것도 적지 않음
            txt.textContent = `내용이 없습니다.`;
            underline.style.backgroundColor = "red";
            return false;

        case "ttb":  // too tiny or big, 너무 크거나 작음
            txt.textContent = `길이가 만족되지 않았습니다. (${min}~${max})`;
            underline.style.backgroundColor = "red";
            return false;

        case "nko":  // no korean or english, 한글이 아님
            txt.textContent = `한글만 입력할 수 있습니다.`;
            underline.style.backgroundColor = "red";
            return false;

        case "nen":  // no english or number, 영어 또는 숫자가 아님
            txt.textContent = `영어 또는 숫자만 입력할 수 있습니다.`;
            underline.style.backgroundColor = "red";
            return false;

        case "nmr":  // not meet the requirements, 비밀번호 제약조건 불충족
            txt.textContent = `영대소문자와 숫자, 특수문자를 포함한 8글자여야 합니다.`;
            underline.style.backgroundColor = "red";
            return false;

        case "nmc":  // not match
            txt.textContent = `비밀번호가 일치하지 않습니다.`;
            underline.style.backgroundColor = "red";
            return false;

        case "cef":  // check email formet, 이메일 형태 확인
            txt.textContent = `이메일의 형태가 올바르지 않습니다.`
            underline.style.backgroundColor = "red";
            return false;

        case "cpf":  // check phone number formet, 전화번호 형태 확인
            txt.textContent = `(0)00-0000-0000 형식이 아닙니다.`
            underline.style.backgroundColor = "red";
            return false;

        default : // 조건 만족
            txt.textContent = '';
            underline.style.backgroundColor = "#96e6a1";
            console.log(errorMessage);
            return true;
    }
}

/// 기본 메세지 & 밑줄 셋팅
function settingMsgNUnder(form) {
    defaultTxt = document.querySelector(`#${form.id} > .name > .message`);
    defaultUnderline = document.querySelector(`#${form.id} > .name > span`);

    defaultTxt.textContent = '';
    defaultUnderline.style.backgroundColor = "#96e6a1";
}




// event
/// === login/sign toggle ===
/// 로그인 하러가기 버튼 누르면 (회원가입 -> 로그인)
inToggleBtn.addEventListener("click", () => {
    invisibleSignup();
    visibleSignin();
    settingMsgNUnder(inForm);
});

/// 회원가입 하러가기 버튼 누르면 (로그인 -> 회원가입)
upToggleBtn.addEventListener("click", () => {
    invisibleSignin();
    visibleSignup();
    settingMsgNUnder(upForm);
});



/// === gradu 표시 여부 ===
/// 회원가입 시 직업(학생) 선택 시 gradu state 표시
document.getElementById("u-student").addEventListener("click", () => {
    console.log("student");
    gradu.style.display = "flex";
});

/// 회원가입 시 직업(선생) 선택 시 gradu state 숨김
document.getElementById("u-teacher").addEventListener("click", () => {
    console.log("teacher");
    document.getElementById("gradu").style.display = "none";
});



/// === 로그인 유효성 검사 ===
/// 직업 검사
inForm.job.forEach(radio => {
    radio.addEventListener("change", (e) => {
        // 하나도 선택되지 않으면 false
        const selected = ![...inForm.job].every(radio => !radio.checked); // job 라디오들을 분해해 새로운 배열로 만든 후 모두 선택이 안되었는지 확인하는 코드
        inCheck["job"] = selected; // 선택됨: true  선택안됨: false
    })
});

upForm.job.forEach(radio => {
    radio.addEventListener("change", (e) => {
        // 하나도 선택되지 않으면 false
        const selected = ![...upForm.job].every(radio => !radio.checked); // job 라디오들을 분해해 새로운 배열로 만든 후 모두 선택이 안되었는지 확인하는 코드
        upCheck["job"] = selected; // 선택됨: true  선택안됨: false
    })
});

/// 이름 검사
inForm.name.addEventListener("keyup", () => {
    chkName("in");
});

upForm.name.addEventListener("keyup", () => {
    chkName("up");
});

/// 닉네임 검사
inForm.nickname.addEventListener("keyup", () => {
    chkNickname("in");
});
upForm.nickname.addEventListener("keyup", () => {
    chkNickname("up");
});

/// 비밀번호 검사
inForm.password.addEventListener("keyup", () => {
    chkPw("in");
});
upForm.password.addEventListener("keyup", () => {
    chkPw("up");
});

/// 비밀번호 확인 검사
upForm.checkPassword.addEventListener("keyup", () => {
    chkPwChk("up");
});

/// 이메일 검사
upForm.email.addEventListener("keyup", () => {
    chkEmail("up");
});

/// 전화번호 검사
upForm.phone.addEventListener("keyup", () => {
    chkPhone("up");
});

/// 졸업여부 검사
upForm.attended.forEach(radio => {
    radio.addEventListener("change", (e) => {
        // 하나도 선택되지 않으면 false
        const selected = ![...upForm.attended].every(radio => !radio.checked);
        upCheck["attended"] = selected; // 선택됨: true  선택안됨: false
    })
});



/// === submit ===
/// 로그인 submit
inSubmit.addEventListener("click", (event) => {
    const pass = Object.values(inCheck).every(Boolean); // 딕셔너리 -> 배열로 변환 후 모든 요소가 true인지 확인하는 코드

    if (pass) inForm.submit();
    else {
        event.preventDefault();
        alert("입력한 내용을 다시 확인해주세요.");
    }
});

/// 회원가입 submit
upSubmit.addEventListener("click", (event) => {
    const pass = Object.values(upCheck).every(Boolean); // 딕셔너리 -> 배열로 변환 후 모든 요소가 true인지 확인하는 코드

    if (pass) upForm.submit();
    else {
        event.preventDefault();
        alert("입력한 내용을 다시 확인해주세요.");
    }
});