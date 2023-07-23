package com.geniescode.user;

import com.geniescode.share.exception.ResourceNotFoundException;
import com.geniescode.share.jwt.JWTUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class UserExtractionFromToken implements Function<String, User> {
    private final JWTUtil jwtUtil;
    private final UserRepository userRepository;

    @Override
    public User apply(String requestHeader) {
        final String token = requestHeader.substring(7);
        final String email = jwtUtil.extractSubject(token);

        return userRepository.findUserByUserEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User with email [%s] is not found.".formatted(email)));
    }
}
