package com.example.demo.regi;

import com.example.demo.topic.Topic;
import com.example.demo.topic.TopicRepository;
import com.example.demo.user.UserRepository;
import com.example.demo.user.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class RegiService {

    @Autowired
    private RegiRepository regiRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TopicRepository topicRepository;


    public void regiUserToTopic(Long u_id, long to_id) {
        // 유저 찾아 없으면 에러, 있으면 저장
        Users user = userRepository.findById(u_id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        // 마찬가지로 토픽 찾기
        Topic topic = topicRepository.findById(to_id)
                .orElseThrow(() -> new RuntimeException("Topic not found"));

        // 새로운 수강신청 레코드 만들기
        Regi regi = new Regi();
        regi.setUser(user);
        regi.setTopic(topic);
        regi.setRegi_at(LocalDateTime.now());

        regiRepository.save(regi);
    }
}
