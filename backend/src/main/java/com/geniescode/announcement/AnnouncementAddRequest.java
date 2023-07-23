package com.geniescode.announcement;

public record AnnouncementAddRequest(
        Integer courseId,
        String tittle,
        String announcement
) {
}
