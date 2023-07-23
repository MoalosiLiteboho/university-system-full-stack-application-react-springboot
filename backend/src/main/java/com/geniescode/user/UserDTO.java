package com.geniescode.user;

import java.time.LocalDate;
import java.util.List;

public record UserDTO(
        Integer id,
        String firstname,
        String lastname,
        LocalDate dateOfBirth,
        String email,
        UserGender gender,
        List<String> roles) {
}
