package com.geniescode.user;

import java.time.LocalDate;

public record UserRegistrationRequest(
        String firstname,
        String lastname,
        UserGender gender,
        LocalDate dateOfBirth,
        String email,
        UserRoles roles) {
}
