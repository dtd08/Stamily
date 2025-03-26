package per.stamily.demo.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;
import per.stamily.demo.entity.Student;
import per.stamily.demo.entity.Teacher;

@AllArgsConstructor
@NoArgsConstructor
@ToString

public class MemberForm {

    private String job; // 학생인지 선생인지 구분

    private Long id;

    private String password;

    private String name;

    private String email;

    private String phone;

    private boolean gradu_status; // 졸업 여부

    // entity 변환 메소드 - 학생
    public Student toEntity(MemberForm form) {
        return new Student(id, password, name, email, phone, gradu_status);
    }

    // entity 변환 메소드 - 선생
    public Teacher toEntity() {
        return new Teacher(id, password, name, email, phone);
    }
}
