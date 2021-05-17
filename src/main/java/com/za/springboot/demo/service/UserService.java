package com.za.springboot.demo.service;

import com.za.springboot.demo.model.Role;
import com.za.springboot.demo.model.User;

import java.util.List;

public interface UserService {

    public List<User> getAllUsers();

    public List<Role> getAllRoles();

    public User saveUser(User user);

    public void editUser(User user);

    public User getUser(int id);

    public User getUserByName(String username);

    public void deleteUser(int id);
}