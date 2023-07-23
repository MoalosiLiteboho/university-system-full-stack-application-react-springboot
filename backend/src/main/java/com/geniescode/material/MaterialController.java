package com.geniescode.material;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/course-materials")
public class MaterialController {
    private final MaterialService materialService;

    @PostMapping(
            value = "add-material",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public void uploadCourseMaterial() {

    }

}
