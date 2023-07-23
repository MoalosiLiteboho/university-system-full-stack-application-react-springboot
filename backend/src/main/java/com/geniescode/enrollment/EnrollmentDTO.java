package com.geniescode.enrollment;

import java.time.LocalDateTime;

public record EnrollmentDTO(
    Integer id,
    String instructorNames,
    String studentNames,
    String courseName,
    String courseDescription,
    LocalDateTime enrolledAt) {
}
