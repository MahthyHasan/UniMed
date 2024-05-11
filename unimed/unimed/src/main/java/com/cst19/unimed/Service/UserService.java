package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.User;
import com.cst19.unimed.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {

    @Autowired
    private UserRepo repo;
    public void saveorupdate(User users) {

        repo.save(users);

    }
    public Iterable<User> listAll() {
        return this.repo.findAll();
    }

    public void deleteUser(String id) {
        repo.deleteById(id);
    }

    public User getUserbyID(String userid) {
        return repo.findById(userid).get();
    }

    public User getUserByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username, password); // Implement this method in your UserRepo
    }

}
