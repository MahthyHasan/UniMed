package com.cst19.unimed.Service;


import com.cst19.unimed.Entity.Pharmacist;
import com.cst19.unimed.Repo.PharmacistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PharmasistServices {

    @Autowired
    private PharmacistRepo repo;
    public void saveorupdate(Pharmacist pharmacists){
        repo.save(pharmacists);
    }
    public Pharmacist getUserbyID (String userid){
        return  repo.findById(userid).get();
    }
    public Pharmacist getUserByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username, password); // Implement this method in your UserRepo
    }
}
