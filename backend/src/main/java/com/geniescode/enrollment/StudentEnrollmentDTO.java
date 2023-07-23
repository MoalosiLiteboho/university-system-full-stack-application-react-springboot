package com.geniescode.enrollment;

import java.time.LocalDateTime;

public record StudentEnrollmentDTO(
        Integer id,
        String instructorNames,
        String courseName,
        String courseDescription,
        LocalDateTime enrolledAt) {
}
