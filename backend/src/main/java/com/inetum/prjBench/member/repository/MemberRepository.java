package com.inetum.prjBench.member.repository;

import com.inetum.prjBench.member.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member,Long> {
}
