package com.geniescode.enrollment;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/enrollments")
public class EnrollmentController {
    private final EnrollmentService enrollmentService;

    @GetMapping
    public ResponseEntity<List<EnrollmentDTO>> getAllEnrollments() {
        return ResponseEntity.ok()
                .body(enrollmentService.findAllEnrollments());
    }

    @GetMapping("course-enrollment-by-student")
    public ResponseEntity<List<StudentEnrollmentDTO>> getEnrollmentByStudentId(
            @RequestHeader("Authorization") String requestHeader) {
        return ResponseEntity.ok()
                .body(enrollmentService.findEnrollmentsByStudentId(requestHeader));
    }

    @PostMapping("course-enrollment")
    public void enrollCourse(
            @RequestHeader("Authorization") String requestHeader,
            @RequestBody EnrollCourseRequest request) {
        enrollmentService.enrollCourse(
                request,
                requestHeader);
    }

    @DeleteMapping("{enrollmentId}/course-un-enrollment")
    public void deleteEnrollment(
            @PathVariable("enrollmentId") Integer enrollmentId) {
        enrollmentService.deleteEnrollment(enrollmentId);
    }
}
