package com.example.demo.regi;

import com.example.demo.topic.Topic;
import com.example.demo.user.Users;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Regi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;  // 수강신청 id

    @ManyToOne(fetch = FetchType.LAZY)
    private Users user;  // 신청한 유저

    @ManyToOne(fetch = FetchType.LAZY)
    private Topic topic;  // 신청된 토픽

    @Column
    private LocalDateTime regi_at;  // 신청 날짜
}
