package com.geniescode.enrollment;

import com.geniescode.course.Course;
import com.geniescode.course.CourseRepository;
import com.geniescode.share.exception.DuplicateResourceException;
import com.geniescode.share.exception.ResourceNotFoundException;
import com.geniescode.share.id.IdGenerator;
import com.geniescode.user.User;
import com.geniescode.user.UserExtractionFromToken;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import static com.geniescode.user.UserRoles.STUDENT;

@Service
@RequiredArgsConstructor
public class EnrollmentService {
    private final EnrollmentRepository enrollmentRepository;
    private final CourseRepository courseRepository;
    private final IdGenerator idGenerator;
    private final EnrollmentDTOMapper enrollmentDTOMapper;
    private final StudentEnrollmentDTOMapper studentEnrollmentDTOMapper;
    private final UserExtractionFromToken userExtractionFromToken;

    public List<EnrollmentDTO> findAllEnrollments() {
        return enrollmentRepository.findAllEnrollments()
                .stream()
                .map(enrollmentDTOMapper)
                .toList();
    }

    public List<StudentEnrollmentDTO> findEnrollmentsByStudentId(String requestHeader) {
        User user = userExtractionFromToken.apply(requestHeader);

        if(!user.getRoles().equals(STUDENT))
            throw new IllegalStateException("%s %s you're not a student.".formatted(user.getFirstname(), user.getLastname()));

        return enrollmentRepository.findAllEnrollments()
                .stream()
                .filter(enrollment -> enrollment.getUser().equals(user))
                .map(studentEnrollmentDTOMapper)
                .toList();
    }

    public void enrollCourse(EnrollCourseRequest request, String requestHeader) {
        User student = userExtractionFromToken.apply(requestHeader);

        if(!STUDENT.equals(student.getRoles()))
            throw new IllegalStateException("%s %s you can't be enrolled in a course because you're not a student.".formatted(student.getFirstname(), student.getLastname()));

        Course course = courseRepository.findCourseByCourseId(request.courseId())
                .orElseThrow(() -> new ResourceNotFoundException("Course of id [%s] not found.".formatted(request.courseId())));

        boolean studentAlreadyEnrolledInACourse = enrollmentRepository.findAllEnrollments()
                .stream()
                .filter(enrollment -> enrollment.getUser().equals(student))
                .anyMatch(enrollment -> enrollment.getCourse().equals(course));

        if(studentAlreadyEnrolledInACourse)
            throw new DuplicateResourceException("You are already enrolled in a course(%s).".formatted(course.getName()));

        Enrollment enrollment = Enrollment.builder()
                .id(idGenerator.apply(enrollmentRepository.findAllEnrollmentIds()))
                .user(student)
                .course(course)
                .enrolledAt(LocalDateTime.now())
                .build();
        enrollmentRepository.save(enrollment);
    }

    public void deleteEnrollment(Integer enrollmentId) {
        if(!enrollmentRepository.existsEnrollmentById(enrollmentId))
            throw new ResourceNotFoundException("Enrollment of id [%s] is not found.".formatted(enrollmentId));

        enrollmentRepository.deleteById(enrollmentId);
    }
}
