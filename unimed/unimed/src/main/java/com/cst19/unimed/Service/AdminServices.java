package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.Admin;
import com.cst19.unimed.Entity.AdminBio;
import com.cst19.unimed.Repo.AdminBioRepo;
import com.cst19.unimed.Repo.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service

public class AdminServices {

    @Autowired
    private AdminRepo repo;

    @Autowired
    private AdminBioRepo repobio;

    public void saveorupdate(Admin admins){
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encryptPass = bcrypt.encode(admins.getPassword());
        admins.setPassword(encryptPass);
        repo.save(admins);
    }
    public void saveorupdatebio(AdminBio adminBio){
        repobio.save(adminBio);
    }
    public AdminBio getUserBiobyID(String userid){return  repobio.findById(userid).orElse(null);}
    public Admin getUserbyID (String userid){
        return  repo.findById(userid).get();
    }
    public Admin getUserByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username, password); // Implement this method in your UserRepo
    }
    public Iterable<Admin> listAll(){return this.repo.findAll();}
    public void deleteAdminByID(String userId){
        repo.deleteById(userId);
        repobio.deleteById(userId);
    }

    public Admin getUserByUserName(String username){
        return repo.findByUsername(username);
    }
}
