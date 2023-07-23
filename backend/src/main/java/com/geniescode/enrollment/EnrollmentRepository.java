package com.geniescode.enrollment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface EnrollmentRepository extends JpaRepository<Enrollment, Integer> {
    @Query("select enrollment from enrollments enrollment")
    List<Enrollment> findAllEnrollments();
    @Query("select enrollment.id from enrollments enrollment")
    List<Integer> findAllEnrollmentIds();
    @Query("select enrollment.course.id from enrollments enrollment where enrollment.user.id = :studentId")
    List<Integer> findAllCourseIdByStudentId(Integer studentId);
    boolean existsEnrollmentById(Integer enrollmentId);
}
