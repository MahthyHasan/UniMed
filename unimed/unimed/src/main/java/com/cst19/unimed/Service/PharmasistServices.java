package com.cst19.unimed.Service;


import com.cst19.unimed.Entity.Pharmacist;
import com.cst19.unimed.Entity.PharmacistBio;
import com.cst19.unimed.Repo.PharmacistBioRepo;
import com.cst19.unimed.Repo.PharmacistRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PharmasistServices {

    @Autowired
    private PharmacistRepo repo;

    @Autowired
    private PharmacistBioRepo repobio;

    public void saveorupdate(Pharmacist pharmacists){
        repo.save(pharmacists);
    }
    public void saveorupdatebio(PharmacistBio pharmacistBio){ repobio.save(pharmacistBio);}
    public Pharmacist getUserbyID (String userid){
        return  repo.findById(userid).get();
    }
    public PharmacistBio getUserBiobyID(String userid){return  repobio.findById(userid).orElse(null);}
    public Pharmacist getUserByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username, password); // Implement this method in your UserRepo
    }
    public Iterable<Pharmacist> listAll(){return this.repo.findAll();}
    public void deletePharmacistById(String userId){
        repo.deleteById(userId);
        repo.deleteById(userId);
    }
}
