package com.geniescode.course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public interface CourseRepository extends JpaRepository<Course, Integer> {
    @Query("select course from courses course")
    List<Course> findAllCourses();
    @Query("select course from courses course where course.user.id = :userId")
    List<Course> findAllCoursesByUserId(Integer userId);
    @Query("select course.id from courses course")
    List<Integer> findAllCourseIds();
    @Query("select course from courses course where course.id = :courseId")
    Optional<Course> findCourseByCourseId(Integer courseId);
    boolean existsCourseById(Integer courseId);

}
