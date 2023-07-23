package com.geniescode.course;

import java.time.LocalDate;

public record CourseRegistrationRequest(
        String name,
        String description,
        LocalDate retire) {
}
