package com.example.demo.main;

import com.example.demo.topic.Topic;
import com.example.demo.topic.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class MainController {

    @Autowired
    private TopicService topicService;

    @GetMapping({"/", "/index"})
    public String root(Model model,
                       @PageableDefault(page = 0, size = 4, sort = "id") Pageable pageable) {
        // 페이징 처리(시작은 0번부터, 4개씩, 정렬은 id로)
        Page<Topic> topics = topicService.topicList(pageable);

        // 페이징 처리에 사용할 변수들
        int nowPage = pageable.getPageNumber();
        int startPage = Math.max(0, nowPage - 3);  // 현재 페이지 기준 3 페이지 전까지만 표시
        int endPage = Math.min(topics.getTotalPages(), nowPage + 3);  // 현재 페이지 기준 3 페이지 후까지만 표시
        endPage = (endPage > 0) ? endPage-1 : 0;   // 탬플릿에서 시퀀스 사용 시 의도한 횟수보다 한 번 더 하는 오류 방지용

        // 모델 전송
        model.addAttribute("topics", topics);
        model.addAttribute("nowPage", nowPage);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);

        // 로그
        System.out.println("nowPage = " + nowPage);
        System.out.println("startPage = " + startPage);
        System.out.println("endPage = " + endPage);
        System.out.println("topics = " + topics.getTotalPages());

        return "index";
    }
}
