package com.geniescode.user;

import com.geniescode.gender.Gender;
import com.geniescode.roles.Roles;

import java.time.LocalDate;

public record UserRegistrationRequest(
        String firstname,
        String lastname,
        Gender gender,
        LocalDate dateOfBirth,
        String email,
        String password,
        Roles roles
) {
}
