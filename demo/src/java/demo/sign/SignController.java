package com.example.demo.sign;

import com.example.demo.user.UserDto;
import com.example.demo.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class SignController {
    private final UserService userService;

    @GetMapping("/auth")
    public String showAuthPage() {
        return "sign";
    }

    @PostMapping("/auth/signup")
    public String signup(@ModelAttribute UserDto userDto, Model model) {

        // 비밀번호 확인
        if (!userDto.getPassword().equals(userDto.getCheckPassword())) {
            model.addAttribute("error", "비밀번호가 일치하지 않습니다.");
            return "sign";
        }

        // 학생이 아니면 attended 값 "None"으로 설정
        if (!"student".equals(userDto.getJob())) {
            userDto.setAttended("None");
        }

        // 서비스에 DTO 넘기기
        userService.createUser(userDto);

        return "main";
    }

    @PostMapping("/auth/login")
    public String loginPage() {
        return "main";
    }

    @GetMapping("/main")
    public String main(Model model) {
        return "main";
    }

}
