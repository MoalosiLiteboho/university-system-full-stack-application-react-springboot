package com.geniescode.course;

import com.geniescode.enrollment.EnrollmentRepository;
import com.geniescode.share.exception.ResourceNotFoundException;
import com.geniescode.share.id.IdGenerator;
import com.geniescode.user.User;
import com.geniescode.user.UserExtractionFromToken;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final IdGenerator idGenerator;
    private final CourseDTOMapper courseDTOMapper;
    private final UserExtractionFromToken userExtractionFromToken;

    public List<CourseDTO> findAllCourses() {
        return courseRepository.findAllCourses()
                .stream()
                .map(courseDTOMapper)
                .toList();
    }

    public CourseDTO findCourseById(Integer courseId) {
        return courseRepository.findCourseByCourseId(courseId)
                .map(courseDTOMapper)
                .orElseThrow(() -> new ResourceNotFoundException("Course with id [%s] is not found.".formatted(courseId)));
    }

    public List<CourseDTO> findAllInstructorCourses(String requestHeader) {
        User instructor = userExtractionFromToken.apply(requestHeader);

        return courseRepository.findAllCoursesByUserId(instructor.getId())
                .stream()
                .map(courseDTOMapper)
                .toList();
    }

    public List<CourseDTO> findAllStudentCourses(String requestHeader) {
        User student = userExtractionFromToken.apply(requestHeader);



        return courseRepository.findAllCoursesByUserId(student.getId())
                .stream()
                .map(courseDTOMapper)
                .toList();
    }

    public void registerCourse(CourseRegistrationRequest courseRegistrationRequest, String requestHeader) {
        User instructor = userExtractionFromToken.apply(requestHeader);

        Course course = Course.builder()
                .id(idGenerator.apply(courseRepository.findAllCourseIds()))
                .user(instructor)
                .name(courseRegistrationRequest.name())
                .description(courseRegistrationRequest.description())
                .retire(courseRegistrationRequest.retire())
                .createdAt(LocalDateTime.now())
                .build();

        courseRepository.save(course);
    }

    public void updateCourse(Integer courseId, CourseUpdateRequest request) {
        Course course = courseRepository.findCourseByCourseId(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course with id [%s] is not found.".formatted(courseId)));

        if(!request.name().isEmpty() && !course.getName().equals(request.name())) {
            course.setName(request.name());
        }

        if(!request.description().isEmpty() && !course.getDescription().equals(request.description())) {
            course.setDescription(request.description());
        }

        if(request.retire() != null && course.getRetire() != request.retire()) {
            course.setRetire(request.retire());
        }

        courseRepository.save(course);
    }

    public void deleteCourse(Integer courseId) {
        if(!courseRepository.existsCourseById(courseId))
            throw new ResourceNotFoundException("Course with id [%s] not found.".formatted(courseId));

        courseRepository.deleteById(courseId);
    }
}
