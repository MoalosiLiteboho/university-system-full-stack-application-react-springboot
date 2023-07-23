package com.geniescode.announcement;

import lombok.RequiredArgsConstructor;
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
@RequestMapping("api/v1/announcements")
public class AnnouncementController {
    private final AnnouncementService announcementService;

    @GetMapping("instructor-announcements")
    public List<AnnouncementDTO> getInstructorAnnouncements(
            @RequestHeader("Authorization") String requestHeader) {
        return announcementService.findInstructorAnnouncements(requestHeader);
    }

    @GetMapping("student-announcements")
    public List<StudentAnnouncementDTO> getStudentAnnouncements(
            @RequestHeader("Authorization") String requestHeader) {
        return announcementService.findStudentAnnouncements(requestHeader);
    }

    @PostMapping("add-announcement")
    public void addAnnouncement(
            @RequestHeader("Authorization") String requestHeader,
            @RequestBody AnnouncementAddRequest announcementAddRequest) {
        announcementService.addAnnouncement(
                announcementAddRequest,
                requestHeader
        );
    }

    @DeleteMapping("{announcementId}/announcement-deletion")
    public void deleteAnnouncementById(
            @PathVariable("announcementId") Integer announcementId) {
        announcementService.deleteAnnouncementById(announcementId);
    }
}
