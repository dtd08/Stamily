package com.example.demo.topic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TopicService {

    @Autowired
    private TopicRepository topicRepository;

    // 메인 방과후 내용
    public Page<Topic> topicList(Pageable pageable) {
        return topicRepository.findAll(pageable);
    }

    // 토픽별 세부 내용
    public Topic topicDetail(long id) {
        return topicRepository.findById(id).get();
    }
}
