package com.geniescode.announcement;

import com.geniescode.course.Course;
import com.geniescode.course.CourseRepository;
import com.geniescode.enrollment.EnrollmentRepository;
import com.geniescode.share.exception.ResourceNotFoundException;
import com.geniescode.share.id.IdGenerator;
import com.geniescode.user.User;
import com.geniescode.user.UserExtractionFromToken;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import static com.geniescode.user.UserRoles.INSTRUCTOR;
import static com.geniescode.user.UserRoles.STUDENT;

@Service
@RequiredArgsConstructor
public class AnnouncementService {
    private final AnnouncementRepository announcementRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final IdGenerator idGenerator;
    private final CourseRepository courseRepository;
    private final AnnouncementDTOMapper announcementDTOMapper;
    private final StudentAnnouncementDTOMapper studentAnnouncementDTOMapper;
    private final UserExtractionFromToken userExtractionFromToken;

    public List<AnnouncementDTO> findInstructorAnnouncements(String requestHeader) {
        User instructor = userExtractionFromToken.apply(requestHeader);

        if(!INSTRUCTOR.equals(instructor.getRoles()))
            throw new IllegalStateException("%s %s you can't get announcement because you aren't an instructor.".formatted(instructor.getFirstname(), instructor.getLastname()));

        return announcementRepository.findAnnouncementByUserId(instructor.getId())
                .stream()
                .map(announcementDTOMapper)
                .toList();
    }

    public List<StudentAnnouncementDTO> findStudentAnnouncements(String requestHeader) {
        User student = userExtractionFromToken.apply(requestHeader);

        if(!STUDENT.equals(student.getRoles()))
            throw new IllegalStateException("%s %s you can't get announcement because you aren't an student.".formatted(student.getFirstname(), student.getLastname()));

        List<Integer> courseIdByStudentId = enrollmentRepository.findAllCourseIdByStudentId(student.getId());

        return announcementRepository.findAllAnnouncements()
                .stream()
                .filter(announcement -> courseIdByStudentId.contains(announcement.getCourse().getId()))
                .map(studentAnnouncementDTOMapper)
                .toList();
    }

    public void addAnnouncement(AnnouncementAddRequest request, String requestHeader) {
        User instructor = userExtractionFromToken.apply(requestHeader);

        if(!INSTRUCTOR.equals(instructor.getRoles()))
            throw new IllegalStateException("%s %s you can't add announcement because you are not an instructor.".formatted(instructor.getFirstname(), instructor.getLastname()));

        Course course = courseRepository.findCourseByCourseId(request.courseId())
                .orElseThrow(() -> new ResourceNotFoundException("Course with id[%s] not found.".formatted(request.courseId())));

        Announcement announcement = Announcement.builder()
                .id(idGenerator.apply(announcementRepository.findAllAnnouncementIds()))
                .user(instructor)
                .course(course)
                .tittle(request.tittle())
                .announcement(request.announcement())
                .createdAt(LocalDateTime.now())
                .build();

        announcementRepository.save(announcement);
    }

    public void deleteAnnouncementById(Integer announcementId) {
        if(!announcementRepository.existsAnnouncementById(announcementId))
            throw new ResourceNotFoundException("Announcement with id [%s] not found.".formatted(announcementId));

        announcementRepository.deleteById(announcementId);
    }
}
