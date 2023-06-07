package com.geniescode.user;

import java.util.List;
import java.util.Optional;

public interface UserDao {
    List<User> selectAllUsers();
    Optional<User> selectUserById(Integer userId);
    void insertUser(User user);
    void updateUser(User user);
    void deleteUserById(Integer userId);
}
