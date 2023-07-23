package com.geniescode.announcement;

import java.time.LocalDateTime;

public record StudentAnnouncementDTO(
        Integer id,
        String instructorNames,
        String courseName,
        String tittle,
        String announcement,
        LocalDateTime createdAt) {
}
