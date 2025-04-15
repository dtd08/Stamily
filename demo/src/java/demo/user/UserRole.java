package com.example.demo.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum UserRole {

    STUDENT_ENROLLED("student", "enrolled"), // 재학중
    STUDENT_GRADUATED("student", "graduated"), // 졸업
    TEACHER("teacher", "None");

    private final String role;
    private final String attended;
}
