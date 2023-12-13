package com.inetum.prjBench.member.service;

import com.inetum.prjBench.member.MemberCsvRepresentation;
import com.inetum.prjBench.member.model.Member;
import com.inetum.prjBench.member.repository.MemberRepository;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.bean.HeaderColumnNameMappingStrategy;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class MemberServiceImpl {

    private final MemberRepository memberRepository;


    public Integer upLoadMembersFromCsv() throws IOException, URISyntaxException {
        Set<Member> members = parseCsv();
        memberRepository.saveAll(members);
        return members.size();
    }

    private Set<Member> parseCsv() throws IOException, URISyntaxException {

        URL resource = getClass().getClassLoader().getResource("csv/member.csv");
        if (resource == null) {
            throw new IllegalArgumentException("file not found!");
        } else {
            File csvFile = new File(resource.toURI());

            try (Reader reader = new BufferedReader(new FileReader(csvFile))) {
                HeaderColumnNameMappingStrategy<MemberCsvRepresentation> strategy =
                        new HeaderColumnNameMappingStrategy<>();
                strategy.setType(MemberCsvRepresentation.class);
                CsvToBean<MemberCsvRepresentation> csvToBean =
                        new CsvToBeanBuilder<MemberCsvRepresentation>(reader)
                                .withMappingStrategy(strategy)
                                .withIgnoreEmptyLine(true)
                                .withIgnoreLeadingWhiteSpace(true)
                                .build();
                return csvToBean.parse()
                        .stream()
                        .map(csvLine -> Member.builder()
                                .id(csvLine.getId())
                                .email(csvLine.getEmail())
                                .firstName(csvLine.getFirstName())
                                .lastName(csvLine.getLastName())
                                .active(csvLine.isActive())
                                .role(csvLine.getRole())
                                .build()
                        )
                        .collect(Collectors.toSet());
            }
        }

    }

}
