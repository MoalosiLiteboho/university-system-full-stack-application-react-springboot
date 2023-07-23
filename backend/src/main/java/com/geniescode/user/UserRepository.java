package com.geniescode.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("select u from users u")
    List<User> findAllUsers();
    @Query("select user from users user where user.id = :userId")
    Optional<User> findUserById(Integer userId);
    @Query("select user from users user where user.email = :userEmail")
    Optional<User> findUserByUserEmail(String userEmail);
    boolean existsUserById(Integer userId);
}