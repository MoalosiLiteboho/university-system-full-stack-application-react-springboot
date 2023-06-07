package com.geniescode.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class UserDataAccessService implements UserDao{
    private final UserRepository userRepository;

    @Override
    public List<User> selectAllUsers() {
        return userRepository.findAllUsers();
    }

    @Override
    public Optional<User> selectUserById(Integer userId) {
        return userRepository.findUserById(userId);
    }

    @Override
    public void insertUser(User user) {
        userRepository.save(user);
    }

    @Override
    public void updateUser(User user) {
        userRepository.save(user);
    }

    @Override
    public void deleteUserById(Integer userId) {
        userRepository.deleteUserById(userId);
    }
}
