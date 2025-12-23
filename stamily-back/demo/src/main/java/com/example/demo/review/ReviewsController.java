package com.example.demo.review;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReviewsController {

    @GetMapping("/review")
    public String reviews(Model model) {

        return "review/reviews";
    }

    @GetMapping("review/detail")
    public String reviewDetail(Model model) {

        return "review/reviewDetail";
    }
}
