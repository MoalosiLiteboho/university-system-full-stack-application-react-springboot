package com.geniescode.announcement;

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

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "announcements")
public class Announcement {
    @Id
    private Integer id;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "instructor_id"
    )
    private User user;

    @ManyToOne
    @JoinColumn(
            nullable = false,
            name = "course_id"
    )
    private Course course;

    @Column(nullable = false)
    private String tittle;

    @Column(nullable = false)
    private String announcement;

    @Column(nullable = false)
    private LocalDateTime createdAt;
}