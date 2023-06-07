package com.geniescode.user;

import com.geniescode.gender.Gender;

import java.time.LocalDate;

public record UserUpdateRequest(
        String firstname,
        String lastname,
        Gender gender,
        LocalDate dateOfBirth,
        String email
) {
}
