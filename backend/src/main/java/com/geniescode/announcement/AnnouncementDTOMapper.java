package com.geniescode.announcement;

import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class AnnouncementDTOMapper implements Function<Announcement, AnnouncementDTO> {
    @Override
    public AnnouncementDTO apply(Announcement announcement) {
        return new AnnouncementDTO(
                announcement.getId(),
                announcement.getCourse().getName(),
                announcement.getTittle(),
                announcement.getAnnouncement(),
                announcement.getCreatedAt()
        );
    }
}
