package com.example.demo.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;

@Getter
public enum UserRole {

    STUDENT_ENROLLED("student", "enrolled"), // 재학중
    STUDENT_GRADUATED("student", "graduated"), // 졸업
    TEACHER("teacher", "None");

    UserRole(String role, String name) {
        this.role = role;
        this.attended = name;
    }

    private final String role;
    private final String attended;
}
