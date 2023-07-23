package com.geniescode.grades;

import com.geniescode.assignment.Assignment;
import com.geniescode.course.Course;
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

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "grades")
public class Grades {
    @Id
    private Integer id;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "course_id"
    )
    private Course course;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "assignment_id"
    )
    private Assignment assignment;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "student_id"
    )
    private User user;

    @Column(nullable = false)
    private Boolean submitted;

    @Column(nullable = false)
    private Integer marks;

    @Column(nullable = false)
    private String grade;
}