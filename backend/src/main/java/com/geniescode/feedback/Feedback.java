package com.geniescode.feedback;

import com.geniescode.course.Course;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "feedbacks")
public class Feedback {
    @Id
    private Integer id;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "course_id"
    )
    private Course course;

    @Column(nullable = false)
    private String rating;

    @Column(nullable = false)
    private String feedback;

    @Column(nullable = false)
    private LocalDateTime createdAt;
}
