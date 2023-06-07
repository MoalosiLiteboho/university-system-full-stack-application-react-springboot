package com.geniescode.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
public class UserController {
    private final UserService userService;

    @GetMapping
    public List<UserDTO> getUsers() {
        return userService.findAllUsers();
    }

    @GetMapping("{userId}/user")
    public UserDTO getUserById(
            @PathVariable("userId") Integer userId) {
        return userService.findUserById(userId);
    }

    @PostMapping("registration")
    public void registerUser(
            @RequestBody UserRegistrationRequest request) {
        userService.registerUser(request);
    }

    @PutMapping("{userId}/update-user")
    public void updateUser(
            @PathVariable("userId") Integer userId,
            @RequestBody UserUpdateRequest request) {
        userService.updateUser(userId, request);
    }

    @DeleteMapping("{userId}/delete-user")
    public void deleteUser(
            @PathVariable("userId") Integer userId) {
        userService.deleteUserById(userId);
    }
}