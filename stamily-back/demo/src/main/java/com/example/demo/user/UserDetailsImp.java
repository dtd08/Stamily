package com.example.demo.user;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserDetailsImp implements UserDetails {
    private final Users user;
    private final List<GrantedAuthority> authorities;
    
    public UserDetailsImp(Users user) {
        this.user = user;
        this.authorities = new ArrayList<>();
    }

    public UserDetailsImp(Users user, List<GrantedAuthority> authorities) {
        this.user = user;
        this.authorities = authorities;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.authorities != null && !this.authorities.isEmpty()) {
            return this.authorities;
        }
        List<GrantedAuthority> computed = new ArrayList<>();
        if ("teacher".equals(user.getJob())) {
            computed.add(new SimpleGrantedAuthority("ROLE_TEACHER"));
        } else {
            if ("enrolled".equals(user.getAttended())) {
                computed.add(new SimpleGrantedAuthority("ROLE_STUDENT_ENROLLED"));
            } else if ("graduated".equals(user.getAttended())) {
                computed.add(new SimpleGrantedAuthority("ROLE_STUDENT_GRADUATED"));
            } else {
                computed.add(new SimpleGrantedAuthority("ROLE_USER"));
            }
        }
        this.authorities.addAll(computed);
        return this.authorities;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getNickname();
    }

    public Long getId() {
        return user.getId();
    }

    public String getNickname() {
        return user.getNickname();
    }

    public String getEmail() {
        return user.getEmail();
    }

    public String getPhone() {
        return user.getPhone();
    }

    public String getJob() {
        return user.getJob();
    }

    public String getAttended() {
        return user.getAttended();
    }
}
