package com.geniescode.user;

import com.geniescode.gender.Gender;
import com.geniescode.roles.Roles;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "users")
public class User {
    @Id
    private Integer id;

    @Column(nullable = false)
    private String firstname;

    @Column(nullable = false)
    private String lastname;

    @Column(nullable = false)
    private LocalDate dateOfBirth;

    @Column(
            nullable = false,
            unique = true
    )
    private String email;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Roles roles;

    @Column(nullable = false)
    private LocalDate createdAt;
}
