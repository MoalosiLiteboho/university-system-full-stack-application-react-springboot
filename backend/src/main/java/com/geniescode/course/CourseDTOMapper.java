package com.geniescode.course;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
@AllArgsConstructor
public class CourseDTOMapper implements Function<Course, CourseDTO> {
    @Override
    public CourseDTO apply(Course course) {
        return new CourseDTO(
                course.getId(),
                course.getUser().getFirstname() + " " + course.getUser().getLastname(),
                course.getName(),
                course.getDescription(),
                course.getRetire(),
                course.getCreatedAt()
        );
    }
}