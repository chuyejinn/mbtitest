package com.example.mbtitest.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/question")
    public String question() {
        return "question";
    }

    @GetMapping("/result")
    public String result() {
        return "result";
    }
}