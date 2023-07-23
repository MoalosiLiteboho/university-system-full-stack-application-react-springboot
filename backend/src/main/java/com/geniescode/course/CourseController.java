package com.geniescode.course;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/courses")
public class CourseController {
    private final CourseService courseService;

    @GetMapping
    public ResponseEntity <List<CourseDTO>> getAllCourses() {
        return ResponseEntity.ok()
                .body(courseService.findAllCourses());
    }

    @GetMapping("instructor-courses")
    public ResponseEntity <List<CourseDTO>> getAllInstructorCourses(
            @RequestHeader("Authorization") String requestHeader) {
        return ResponseEntity.ok()
                .body(courseService.findAllInstructorCourses(requestHeader));
    }

    @GetMapping("student-courses")
    public ResponseEntity <List<CourseDTO>> getAllStudentCourses(
            @RequestHeader("Authorization") String requestHeader) {
        return ResponseEntity.ok()
                .body(courseService.findAllStudentCourses(requestHeader));
    }

    @PostMapping("register-course")
    public void registerCourse(
            @RequestHeader("Authorization") String requestHeader,
            @RequestBody CourseRegistrationRequest courseRegistrationRequest) {
        courseService.registerCourse(
                courseRegistrationRequest,
                requestHeader
        );
    }

    @PutMapping("{courseId}/update-course")
    public void updateCourse(
            @PathVariable("courseId") Integer courseId,
            @RequestBody CourseUpdateRequest request) {
        courseService.updateCourse(
                courseId,
                request
        );
    }

    @DeleteMapping("{courseId}/delete-course")
    public void deleteCourse(
            @PathVariable("courseId") Integer courseId) {
        courseService.deleteCourse(courseId);
    }
}