package com.geniescode.assignment;

import com.geniescode.course.Course;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "assignments")
public class Assignment {
    @Id
    private Integer id;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "course_id"
    )
    private Course course;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    LocalDateTime postedAt;

    @Column(nullable = false)
    LocalDateTime deadline;
}
