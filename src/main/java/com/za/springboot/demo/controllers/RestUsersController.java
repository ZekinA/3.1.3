package com.za.springboot.demo.controllers;

import com.za.springboot.demo.model.User;
import com.za.springboot.demo.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@RestController
@RequestMapping("/api")
public class RestUsersController {
    private final UserService userService;

    public RestUsersController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users,HttpStatus.OK) ;
    }

    @GetMapping("/user")
    public ResponseEntity<User> getUser (){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.getUserByName(auth.getName());
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") int id){
        User user = userService.getUser(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
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
