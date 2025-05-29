package com.example.demo.reviews;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ReviewsController {

    @GetMapping("/reviews")
    public String reviews(Model model) {

        return "reviews/reviews";
    }

    @GetMapping("reviews/detail")
    public String reviewDetail(Model model) {

        return "reviews/reviewDetail";
    }
}
