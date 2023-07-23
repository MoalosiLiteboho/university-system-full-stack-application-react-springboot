package com.geniescode.enrollment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class StudentEnrollmentDTOMapper implements Function<Enrollment, StudentEnrollmentDTO> {
    @Override
    public StudentEnrollmentDTO apply(Enrollment enrollment) {
        return new StudentEnrollmentDTO(
                enrollment.getId(),
                enrollment.getCourse().getUser().getFirstname() + " " + enrollment.getCourse().getUser().getFirstname(),
                enrollment.getCourse().getName(),
                enrollment.getCourse().getDescription(),
                enrollment.getEnrolledAt()
        );
    }
}
