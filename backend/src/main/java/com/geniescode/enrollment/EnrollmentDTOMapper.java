package com.geniescode.enrollment;

import com.geniescode.course.CourseDTO;
import com.geniescode.course.CourseService;
import com.geniescode.user.UserDTO;
import com.geniescode.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class EnrollmentDTOMapper implements Function<Enrollment, EnrollmentDTO> {
    private final CourseService courseService;
    private final UserService userService;

    @Override
    public EnrollmentDTO apply(Enrollment enrollment) {
        CourseDTO course = courseService.findCourseById(enrollment.getCourse().getId());
        UserDTO user = userService.findUserById(enrollment.getUser().getId());
        return new EnrollmentDTO(
                enrollment.getId(),
                course.instructorNames(),
                user.firstname() + " " + user.lastname(),
                enrollment.getCourse().getName(),
                enrollment.getCourse().getDescription(),
                enrollment.getEnrolledAt()
        );
    }
}
