package com.geniescode.course;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record CourseDTO(
    Integer id,
    String instructorNames,
    String name,
    String description,
    LocalDate retire,
    LocalDateTime createdAt){
}
