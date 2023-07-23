package com.geniescode.login;

import com.geniescode.share.jwt.JWTUtil;
import com.geniescode.user.User;
import com.geniescode.user.UserDTO;
import com.geniescode.user.UserDTOMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogInService {
    private final AuthenticationManager authenticationManager;
    private final JWTUtil jwtUtil;
    private final UserDTOMapper userDTOMapper;

    public String login(LogInRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.username(),
                        request.password()
                )
        );

        UserDTO user = userDTOMapper.apply(
                (User) authentication.getPrincipal()
        );

        return jwtUtil.generateToken(
                user.email(),
                user.roles()
        );
    }
}