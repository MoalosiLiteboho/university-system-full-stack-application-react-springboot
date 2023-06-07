package com.geniescode.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
public interface UserRepository extends JpaRepository<User, Integer> {
    @Query("select u from users u")
    List<User> findAllUsers();

    @Query("select u from users u where u.id = ?1")
    Optional<User> findUserById(Integer userId);

    @Query("delete from users u where u.id = ?1")
    void deleteUserById(Integer userId);
}
