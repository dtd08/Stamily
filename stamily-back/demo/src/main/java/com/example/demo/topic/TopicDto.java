package com.example.demo.topic;

import com.example.demo.user.Users;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TopicDto {
    private long id;  // 방과후 id

    private String name;  // 방과후명

    private long t_id; // 선생 id

    private Date charge_date;  // 개설 일자

    private Date start_date;  // 수업 시작 일자

    private Date end_date;  // 종료 일자

    private String days;  // 수업 요일

    private int num_of_class;  // 수업 일수

    private int base_class_time;  // 기본 수업 시간

    private int target;  // 수업 대상 (학년)

    private String category;  // 카테고리

    private String descr;  // 설명


    public Topic toEntity() {
        // 1. 웹 상에서 t_id를 받아옴
        // 2. t_id만 담은 Users 객체 생성
        Users teacher = Users.builder().id(t_id).build();

        return Topic.builder()
                .name(name)
                .teacher(teacher)   // Users 객체 전달
                                    // 전송 당시에는 프록시 객체로 갖고 있다가,
                                    // 필드에 접근하는 순간 DB 접근이 발생함
                .charge_date(charge_date)
                .start_date(start_date)
                .end_date(end_date)
                .days(days)
                .num_of_class(num_of_class)
                .base_class_time(base_class_time)
                .target(target)
                .category(category)
                .descr(descr)
                .build();
    }
}
