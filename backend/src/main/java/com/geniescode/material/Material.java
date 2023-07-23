package com.geniescode.material;

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
@Entity(name = "materials")
public class Material {
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
            name = "instructor_id"
    )
    private User user;

    @Column(nullable = false)
    private String tittle;

    @Column(nullable = false)
    private String fileId;
}
