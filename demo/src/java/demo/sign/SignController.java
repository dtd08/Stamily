package com.example.demo.sign;

import com.example.demo.user.UserDto;
import com.example.demo.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/auth")
@RequiredArgsConstructor
public class SignController {
    private final UserService userService;

    @GetMapping
    public String showAuthPage() {
        return "sign";
    }

    @PostMapping("/signup")
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

        return "sign";
    }

    @PostMapping("login")
    public String login(@ModelAttribute UserDto userDto, Model model) {
        return "sign";
    }

}
