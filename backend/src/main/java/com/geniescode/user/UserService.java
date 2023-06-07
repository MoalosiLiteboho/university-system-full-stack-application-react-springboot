package com.geniescode.user;

import com.geniescode.share.id.IdGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserDao userDao;
    private final UserDTOMapper userDTOMapper;
    private final IdGenerator idGenerator;


    public List<UserDTO> findAllUsers() {
        return userDao.selectAllUsers()
                .stream()
                .map(userDTOMapper)
                .toList();
    }

    private List<Integer> findUserIdList() {
        return userDao.selectAllUsers()
                .stream()
                .map(User::getId)
                .toList();
    }

    public UserDTO findUserById(Integer userId) {
        return userDao.selectUserById(userId)
                .map(userDTOMapper)
                .orElseThrow();
    }

    public void registerUser(UserRegistrationRequest request) {
        User user = User.builder()
                .id(idGenerator.apply(findUserIdList()))
                .email(request.email())
                .createdAt(LocalDate.now())
                .build();

        userDao.insertUser(user);
    }

    public void updateUser(Integer userId, UserUpdateRequest request) {
        User user = userDao.selectUserById(userId)
                .orElseThrow();

        if(!request.firstname().isEmpty() && !user.getFirstname().equals(request.firstname())) {
            user.setFirstname(request.firstname());
        }


        userDao.updateUser(user);
    }

    public void deleteUserById(Integer userId) {

        userDao.deleteUserById(userId);
    }
}
