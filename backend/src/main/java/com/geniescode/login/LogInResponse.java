package com.geniescode.login;

import com.geniescode.user.UserDTO;

public record LogInResponse(
        String token,
        UserDTO userDTO
) {
}
