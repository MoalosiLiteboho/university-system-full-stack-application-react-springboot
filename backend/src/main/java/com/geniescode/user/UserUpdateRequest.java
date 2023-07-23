package com.geniescode.user;

import java.time.LocalDate;

public record UserUpdateRequest(
        String firstname,
        String lastname,
        UserGender gender,
        LocalDate dateOfBirth,
        String email
) {
}
