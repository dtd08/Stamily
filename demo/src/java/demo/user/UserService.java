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
        Users user = userDto.toEntity();
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setJob(userDto.getJob());

        if ("student".equals(user.getJob())) {
            user.setAttended(userDto.getAttended());
        } else {
            user.setAttended("None");
        }

        userRepository.save(user);
        System.out.println("User created");
    }
}
