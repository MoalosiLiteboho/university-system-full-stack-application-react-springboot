package com.geniescode.course;

import java.time.LocalDate;

public record CourseUpdateRequest(
        String name,
        String description,
        LocalDate retire) {
}
