package com.example.demo.topic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping("topic/detail")
    public String topicDetail(Model model, long id) {
        model.addAttribute("detail", topicService.topicDetail(id));

        return "topic/topicDetail";
    }


}
