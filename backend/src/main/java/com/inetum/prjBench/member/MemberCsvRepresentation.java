package com.inetum.prjBench.member;

import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvDate;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberCsvRepresentation {
 @CsvBindByName(column = "id")
    private Long id;
    @CsvBindByName(column = "email")
    private String email;
    @CsvBindByName(column = "first_name")
    private String firstName;
    @CsvBindByName(column = "last_name")
    private String lastName;

    @CsvBindByName(column = "active")
    private boolean active;
   @CsvBindByName(column = "role")
   private String role;
    @CsvBindByName(column = "createdDate")
    private Instant createdDate;
    @CsvBindByName(column = "updatedDate")
    private Instant updatedDate;
}
