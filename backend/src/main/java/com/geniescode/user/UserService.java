package com.geniescode.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserDao userDao;
    private final UserDTOMapper userDTOMapper;


    public List<UserDTO> findAllUsers() {
        return userDao.selectAllUsers()
                .stream()
                .map(userDTOMapper)
                .toList();
    }

    public UserDTO findUserById(Integer userId) {
        return userDao.selectUserById(userId)
                .map(userDTOMapper)
                .orElseThrow();
    }

    public void registerUser(UserRegistrationRequest request) {
        User user = User.builder()
                .createdAt(LocalDate.now())
                .build();

        userDao.insertUser(user);
    }

    public void updateUser(Integer userId, UserUpdateRequest request) {
        User user = userDao.selectUserById(userId)
                .orElseThrow();


        userDao.updateUser(user);
    }

    public void deleteUserById(Integer userId) {

        userDao.deleteUserById(userId);
    }
}
