package com.geniescode.material;

import org.springframework.web.multipart.MultipartFile;

public record MaterialAddRequest(
        Integer courseId,
        Integer instructorId,
        String tittle,
        MultipartFile file) {
}
