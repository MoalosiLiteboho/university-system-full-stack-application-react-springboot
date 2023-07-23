package com.geniescode.user;

import com.geniescode.share.id.IdGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

import static com.geniescode.user.UserRoles.STUDENT;

@Service
@RequiredArgsConstructor
public class UserBuilder {
    private final UserRepository userRepository;
    private final IdGenerator idGenerator;
    private final PasswordEncoder passwordEncoder;

    public User buildUser(UserRegistrationRequest request) {
        return User.builder()
                .id(idGenerator.apply(findUserIdList()))
                .firstname(request.firstname())
                .lastname(request.lastname())
                .gender(request.gender())
                .email(request.email())
                .dateOfBirth(request.dateOfBirth())
                .password(passwordEncoder.encode(
                        "%s@%s".formatted(
                                request.lastname(),
                                request.dateOfBirth().getYear()
                        )
                ))
                .roles(request.roles())
                .createdAt(LocalDate.now())
                .enabled(true)
                .build();
    }

    public User buildUser(StudentRegistrationRequest request) {
        return User.builder()
                .id(idGenerator.apply(findUserIdList()))
                .firstname(request.firstname())
                .lastname(request.lastname())
                .gender(request.gender())
                .email(request.email())
                .dateOfBirth(request.dateOfBirth())
                .password(passwordEncoder.encode(request.password()))
                .roles(STUDENT)
                .createdAt(LocalDate.now())
                .enabled(true)
                .build();
    }

    private List<Integer> findUserIdList() {
        return userRepository.findAllUsers()
                .stream()
                .map(User::getId)
                .toList();
    }
}
