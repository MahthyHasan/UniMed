package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.Admin;
import com.cst19.unimed.Repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class AdminServices {

    @Autowired
    private AdminRepo repo;
    public void saveorupdate(Admin admins){
        repo.save(admins);
    }
    public Admin getUserbyID (String userid){
        return  repo.findById(userid).get();
    }
    public Admin getUserByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username, password); // Implement this method in your UserRepo
    }
}
