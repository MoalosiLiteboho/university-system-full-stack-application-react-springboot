package com.geniescode.user;

import com.geniescode.gender.Gender;
import com.geniescode.roles.Roles;

import java.time.LocalDate;

public record UserDTO(
        Integer id,
        String firstname,
        String lastname,
        LocalDate dateOfBirth,
        String email,
        Gender gender,
        Roles roles) {
}
