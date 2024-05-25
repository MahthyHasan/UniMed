package com.cst19.unimed.Service;


import com.cst19.unimed.Entity.Doctor;
import com.cst19.unimed.Repo.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorServices {

    @Autowired
    private DoctorRepo repo;
    public void  saveorupdate(Doctor doctors){
        repo.save(doctors);
    }
    public Doctor getUserbyID (String userid){
        return  repo.findById(userid).get();
    }
    public Doctor getUserByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username, password); // Implement this method in your UserRepo
    }
}
