package per.stamily.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class Student {

    @Id
    private Long s_id;

    @Column
    private String password;

    @Column
    private String name;

    @Column
    private String email;

    @Column
    private String phone;

    @Column
    private boolean gradu_status;

}
