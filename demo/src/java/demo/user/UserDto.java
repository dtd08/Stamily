package com.example.demo.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
    private String name;
    private String nickname;
    private String password;
    private String checkPassword;
    private String email;
    private String phone;

    private String job;         // "학생" or "선생"
    private String attended;  // "재학생", "졸업생"

    // DTO -> Entity 변환 메서드 (builder 패턴 사용)
    public Users toEntity() {
        return Users.builder()
                .name(name)
                .nickname(nickname)
                .password(password) // 암호화는 서비스 계층에서
                .email(email)
                .phone(phone)
                .job(job)
                .attended(attended)
                .build();
    }
}
