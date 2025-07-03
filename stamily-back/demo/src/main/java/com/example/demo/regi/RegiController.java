package com.example.demo.regi;

import com.example.demo.user.UserDetailsImp;
import org.springframework.security.core.Authentication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RegiController {

    @Autowired
    private RegiService regiService;


    @PostMapping("/regi")
    public String regi(@RequestParam long to_id, Authentication auth) {
        UserDetailsImp user = (UserDetailsImp) auth.getPrincipal(); // 로그인한 user의 id값 불러오기
        regiService.regiUserToTopic(user.getId(), to_id); // 수강신청 로직 (토픽 아이디는 topicDetail에서 온 리퀘스트에서 불러오기)

        // 신청한 토픽(방과후) 상세 화면
        return "redirect:/topic/details?id=" + to_id;
    }
}
