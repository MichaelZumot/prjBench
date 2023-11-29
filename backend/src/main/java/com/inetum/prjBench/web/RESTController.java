package com.inetum.prjBench.web;

import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/*")
@CrossOrigin(origins = "http://localhost:4200")
public class RESTController {

    private Logger log = LoggerFactory.getLogger(RESTController.class);

    @GetMapping("/test")
    public ResponseEntity<Map<String, String>> testConnection() {
         try {
        log.info("test succeeded!");
        // return a success response
        Map<String, String> response = new HashMap<>();
        response.put("message", "yay!");
        return ResponseEntity.ok(response);
    } catch (Exception e) {
        log.error("Error occurred: " + e.getMessage(), e);
        // return an error response
        Map<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", "Error occurred: " + e.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
    }
}
}