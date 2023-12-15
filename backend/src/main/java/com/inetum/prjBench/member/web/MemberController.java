package com.inetum.prjBench.member.web;

import com.inetum.prjBench.member.service.MemberServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URISyntaxException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/members")
public class MemberController {

    private final MemberServiceImpl memberService;


    @PostMapping(value = "/upload")
    public ResponseEntity<Integer> uploadMembers() throws IOException, URISyntaxException {
        return ResponseEntity.ok(memberService.upLoadMembersFromCsv());
    }
}
