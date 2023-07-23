package com.geniescode.email;

import com.geniescode.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
@RequiredArgsConstructor
public class EmailTaken implements Predicate<String> {
    private final UserRepository userRepository;
    @Override
    public boolean test(String email) {
        return userRepository.findAllUsers()
                .stream()
                .anyMatch(user -> user.getEmail()
                        .equals(email)
                );
    }
}
