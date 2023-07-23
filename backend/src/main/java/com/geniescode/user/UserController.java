package com.geniescode.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("{userId}/user-name")
    public String getUserNameById(
            @PathVariable("userId") Integer userId) {
        return userService.findUserNamesById(userId);
    }

    @PostMapping("user-registration")
    public void registerUser(
            @RequestBody UserRegistrationRequest request) {
        userService.registerUser(request);
    }

    @PostMapping("student-registration")
    public void registerStudent(
            @RequestBody StudentRegistrationRequest request) {
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