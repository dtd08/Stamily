package com.example.demo.topic;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;  // 방과후 id

    @Column
    private String name;  // 방과후명

    @Column
    private long t_id; // 선생 id

    @Column
    private Date charge_date;  // 개설 일자

    @Column
    private Date start_date;  // 수업 시작 일자

    @Column
    private Date end_date;  // 종료 일자

    @Column
    private String days;  // 수업 요일

    @Column
    private int num_of_class;  // 수업 일수

    @Column
    private int base_class_time;  // 기본 수업 시간

    @Column
    private int target;  // 수업 대상 (학년)

    @Column
    private String category;  // 카테고리

    @Column
    private String desc;  // 설명
}
