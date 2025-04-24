package com.example.demo;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // 1) 공개할 리소스만 permitAll, 나머지는 인증 요구
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/",
                                "/main",
                                "/auth/**",
                                "/css/**",
                                "/js/**",
                                "/h2-console/**").permitAll()
                        .anyRequest().authenticated()  // 그 외 모든 요청은 인증 필요
                )
                // 2) H2 콘솔을 위해 csrf 제외, frame 허용
                .csrf(csrf -> csrf
                        .ignoringRequestMatchers(new AntPathRequestMatcher("/h2-console/**"))
                )
                .headers(headers -> headers
                        .addHeaderWriter(
                                new XFrameOptionsHeaderWriter(
                                        XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN))
                )
                // 3) 폼 로그인 설정
                .formLogin(form -> form
                        .loginPage("/auth")                        // 로그인 페이지 GET
                        .loginProcessingUrl("/auth/login")         // 로그인 처리 POST
                        .usernameParameter("nickname")             // 폼의 name="nickname"
                        .passwordParameter("password")             // name="password"
                        .defaultSuccessUrl("/")                    // 로그인 성공 시
                        .permitAll()                               // 로그인 페이지는 공개
                )
                // 4) 로그아웃 설정
                .logout(logout -> logout
                        .logoutRequestMatcher(new AntPathRequestMatcher("/auth/logout"))
                        .logoutSuccessUrl("/")
                        .invalidateHttpSession(true)
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig)
            throws Exception {
        return authConfig.getAuthenticationManager();
    }
}
