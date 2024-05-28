package com.cst19.unimed.Service;


import com.cst19.unimed.Entity.Doctor;
import com.cst19.unimed.Entity.DoctorBio;
import com.cst19.unimed.Repo.DoctorBioRepo;
import com.cst19.unimed.Repo.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DoctorServices {

    @Autowired
    private DoctorRepo repo;

    @Autowired
    private DoctorBioRepo repobio;

    public void  saveorupdate(Doctor doctors){
        repo.save(doctors);
    }
    public void saveorupdatebio(DoctorBio doctorBio){repobio.save(doctorBio);}
    public Doctor getUserbyID (String userid){
        return  repo.findById(userid).get();
    }
    public DoctorBio getUserBiobyID(String userid){return  repobio.findById(userid).orElse(null);}
    public Doctor getUserByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username, password);
    }
    public Iterable<Doctor> listAll(){return this.repo.findAll();}
    public void deleteDoctorById(String userId) {
        repo.deleteById(userId);
        repobio.deleteById(userId);
    }
}
