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

    @GetMapping({"/", "/main"})
    public String root(Model model,
                       @PageableDefault(page = 0, size = 4, sort = "id") Pageable pageable) {
        Page<Topic> topics = topicService.topicList(pageable);

        int nowPage = pageable.getPageNumber();
        int startPage = Math.max(0, nowPage - 3);
        int endPage = Math.min(topics.getTotalPages(), nowPage + 3);

        model.addAttribute("topics", topics);
        model.addAttribute("nowPage", nowPage);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);

        System.out.println("nowPage = " + nowPage);
        System.out.println("startPage = " + startPage);
        System.out.println("endPage = " + endPage);

        return "index";
    }
}
