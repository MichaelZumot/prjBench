package com.inetum.prjBench.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/*")
@CrossOrigin(origins = "http://localhost:4200")
public class RESTController {


    @GetMapping("/login")
    public String login() {
        return "Yay! You are logged in!";
    }
    
}
