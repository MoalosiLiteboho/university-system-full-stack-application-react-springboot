package com.geniescode.course;

import com.geniescode.user.User;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "courses")
public class Course {
    @Id
    private Integer id;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "instructor_id"
    )
    private User user;

    @Column(
            nullable = false,
            unique = true
    )
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private LocalDate retire;

    @Column(nullable = false)
    private LocalDateTime createdAt;
}
