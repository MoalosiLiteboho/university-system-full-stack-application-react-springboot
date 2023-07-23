package com.geniescode.announcement;

import java.time.LocalDateTime;

public record AnnouncementDTO(
        Integer id,
        String courseName,
        String tittle,
        String announcement,
        LocalDateTime createdAt) {
}
