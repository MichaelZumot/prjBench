package com.inetum.prjBench.web;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/token")
@CrossOrigin(origins = "http://localhost:4200")
public class TokenController {

    private Logger log = LoggerFactory.getLogger(RESTController.class);

    @GetMapping
    public ResponseEntity<String> receiveToken(@RequestHeader HttpHeaders headers) {
        log.info("Received Headers: " + headers);
        try {
            return new ResponseEntity<>("Token received and processed", HttpStatus.OK);
        } catch (Exception e) {
            log.error("Error processing token: " + e.getMessage());
            return new ResponseEntity<>("Error processing token", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
