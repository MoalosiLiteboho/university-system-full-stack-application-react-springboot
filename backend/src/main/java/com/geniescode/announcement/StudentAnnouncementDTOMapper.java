package com.geniescode.announcement;

import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class StudentAnnouncementDTOMapper implements Function<Announcement, StudentAnnouncementDTO> {
    @Override
    public StudentAnnouncementDTO apply(Announcement announcement) {
        return new StudentAnnouncementDTO(
                announcement.getId(),
                announcement.getUser().getFirstname() + " " + announcement.getUser().getLastname(),
                announcement.getCourse().getName(),
                announcement.getTittle(),
                announcement.getAnnouncement(),
                announcement.getCreatedAt()
        );
    }
}
