package com.geniescode.user;

import java.time.LocalDate;

public record StudentRegistrationRequest(
        String firstname,
        String lastname,
        UserGender gender,
        LocalDate dateOfBirth,
        String email,
        String password) {
}
