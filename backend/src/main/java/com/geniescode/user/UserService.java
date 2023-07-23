package com.geniescode.user;

import com.geniescode.email.EmailTaken;
import com.geniescode.email.EmailValid;
import com.geniescode.share.exception.DuplicateResourceException;
import com.geniescode.share.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserDTOMapper userDTOMapper;
    private final UserBuilder userBuilder;
    private final EmailValid emailValid;
    private final EmailTaken emailTaken;

    public List<UserDTO> findAllUsers() {
        return userRepository.findAllUsers()
                .stream()
                .map(userDTOMapper)
                .toList();
    }

    public UserDTO findUserById(Integer userId) {
        return userRepository.findUserById(userId)
                .map(userDTOMapper)
                .orElseThrow(() -> new ResourceNotFoundException("User with id [%s] not found.".formatted(userId)));
    }

    public String findUserNamesById(Integer userId) {
        return userRepository.findUserById(userId)
                .map(user -> user.getFirstname() + " " + user.getLastname())
                .orElseThrow(() -> new ResourceNotFoundException("User with id [%s] not found.".formatted(userId)));
    }

    public void registerUser(UserRegistrationRequest request) {
        checkEmailNotExistsAndValidOrElseThrow(request.email());
        User user = userBuilder.buildUser(request);
        userRepository.save(user);
    }

    public void registerUser(StudentRegistrationRequest request) {
        checkEmailNotExistsAndValidOrElseThrow(request.email());
        User user = userBuilder.buildUser(request);
        userRepository.save(user);
    }

    private void checkEmailNotExistsAndValidOrElseThrow(String email) {
        if(!emailValid.test(email))
            throw new RuntimeException("Email [%s] not in a valid form.".formatted(email));

        if (emailTaken.test(email))
            throw new DuplicateResourceException("Email [%s] is already taken.".formatted(email));
    }

    public void updateUser(Integer userId, UserUpdateRequest request) {
        User user = userRepository.findUserById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User with id [%s] not found.".formatted(userId)));

        if(!request.firstname().isEmpty() && !user.getFirstname().equals(request.firstname())) {
            user.setFirstname(request.firstname());
        }

        if(!request.lastname().isEmpty() && !user.getLastname().equals(request.lastname())) {
            user.setLastname(request.lastname());
        }

        if(request.gender() != null && !user.getGender().equals(request.gender())) {
            user.setGender(request.gender());
        }

        if(request.dateOfBirth() != null && !user.getDateOfBirth().equals(request.dateOfBirth())) {
            user.setDateOfBirth(request.dateOfBirth());
        }

        if(!request.email().isEmpty() && !user.getEmail().equals(request.email())) {
            user.setEmail(request.email());
        }

        userRepository.save(user);
    }

    public void deleteUserById(Integer userId) {
        if(!userRepository.existsUserById(userId))
            throw new ResourceNotFoundException("User with id [%s] not found.".formatted(userId));

        userRepository.deleteById(userId);
    }
}