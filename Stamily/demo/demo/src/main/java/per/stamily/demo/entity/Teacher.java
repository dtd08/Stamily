package per.stamily.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Teacher {

    @Id
    private Long t_id;

    @Column
    private String password;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String phone;
}
