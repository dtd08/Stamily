package com.example.demo.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserSecurityService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String nickname) throws
            UsernameNotFoundException {
        Optional<Users> _Users = this.userRepository.findByNickname(nickname);
        if (_Users.isEmpty()) {
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다.");
        }
        Users users = _Users.get();
        List<GrantedAuthority> authorities = new ArrayList<>();
        if ("teacher".equals(users.getJob())) {
            authorities.add(new SimpleGrantedAuthority("ROLE_TEACHER"));
        } else {
            if ("enrolled".equals(users.getAttended())) {
                authorities.add(new SimpleGrantedAuthority("ROLE_STUDENT_ENROLLED"));
            } else if ("graduated".equals(users.getAttended())) {
                authorities.add(new SimpleGrantedAuthority("ROLE_STUDENT_GRADUATED"));
            }
        }
        return new User(users.getNickname(), users.getPassword(), authorities);
    }
}
