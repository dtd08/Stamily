package com.example.demo.user;

import ch.qos.logback.classic.Logger;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public void createUser(UserDto userDto) {
        Users user = userDto.toEntity(); // 엔티티 생성
        user.setPassword(passwordEncoder.encode(userDto.getPassword())); // 엔티티에 패스워드(암호화) 설정
        user.setJob(userDto.getJob()); // 직업 설정

        if ("student".equals(user.getJob())) { // 직업이 학생이면 졸업 여부 작성, 아니면 none
            user.setAttended(userDto.getAttended());
        } else {
            user.setAttended("None");
        }

        userRepository.save(user);
        System.out.println("User created");
    }
}
