package com.za.springboot.demo.controllers;

import com.za.springboot.demo.model.Role;
import com.za.springboot.demo.model.User;
import com.za.springboot.demo.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class RestUsersController {
    private final UserService userService;

    public RestUsersController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/user")
    public User getUser(User user) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        user = userService.getUserByName(auth.getName());
        return user;
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") int id){
        return userService.getUser(id);
    }

    @PostMapping("/users")
    public ResponseEntity<User> addUser(@RequestBody User user){
        userService.saveUser(user);
        return new ResponseEntity<>(userService.getUserByName(user.getName()), HttpStatus.CREATED);
    }

    @PutMapping("/users")
    public ResponseEntity<User> editUser(@RequestBody User user){
        userService.editUser(user);
        return new ResponseEntity<>(userService.getUserByName(user.getName()), HttpStatus.OK);
    }
    @DeleteMapping("/users")
    public ResponseEntity<?> deleteUser(@RequestBody User user) {
        userService.deleteUser(user.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
