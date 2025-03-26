package per.stamily.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MainController {

    // 홈 (강의 목록 띄우기)
    @GetMapping("/index")
    public String index() {
        // 1. 모든 class 가져오기


        // 2. 가져온 class 묶음을 view로 전달


        // 3. 보여줄 페이지 설정
        return "index";
    }


    // 로그인 창 이동 -> 시큐리티로 처리
    @GetMapping("/signin")
    public String signIn() {
        return "signin";
    }


    // 회원가입 창 이동
    @GetMapping("/signup")
    public String signUp() {
        return "signup";
    }

    // 회원가입 처리
    @PostMapping("/signuppro")
    public String signUpPro() {
        // 1. dto 객체 -> entity
        // 1-1. 학생인지, 선생인지 확인


        // 2. repository 에게 entity 저장 명령

        
        // 3. 로그인 화면으로 리턴 *수정 필요*
        return "redirect:/signin";
    }
}
