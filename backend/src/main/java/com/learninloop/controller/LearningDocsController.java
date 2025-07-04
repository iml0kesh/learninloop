package com.learninloop.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LearningDocsController {

    @GetMapping("/")
    public void getHome() {}

    @GetMapping("/learning/java")
    public String getJava() {
        return "Java";
    }

    @GetMapping("/learning/python")
    public String getPython() {
        return "Python";
    }
}
