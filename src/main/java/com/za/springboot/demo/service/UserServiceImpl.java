package com.za.springboot.demo.service;

import com.za.springboot.demo.dao.UserDao;
import com.za.springboot.demo.model.Role;
import com.za.springboot.demo.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserDao userDao;

    public UserServiceImpl(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public List<User> getAllUsers() {
        return userDao.getAllUsers();
    }

    @Override
    public List<Role> getAllRoles() {
        return userDao.getAllRoles();
    }

    @Override
    @Transactional
    public User saveUser(User user) {
        setUserRoles(user);
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        userDao.saveUser(user);
        return user;
    }

    @Override
    @Transactional
    public void editUser(User user) {
        setUserRoles(user);
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        userDao.editUser(user);
    }

    @Override
    public User getUser(int id) {
        return userDao.getUser(id);
    }

    @Override
    public User getUserByName(String username) {
        return userDao.getUserByName(username);
    }

    @Override
    @Transactional
    public void deleteUser(int id) {
        userDao.deleteUser(id);
    }

    @Transactional
    public void setUserRoles(User user) {
        user.setRoles(user
                .getRoles()
                .stream()
                .map(role -> userDao.getRoleByName(role.getName()))
                .collect(Collectors.toSet()));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        return new org.springframework.security.core.userdetails.User(
//                user.getUsername(), user.getPassword(), user.getRoles());

        return userDao.getUserByName(username);
    }
}