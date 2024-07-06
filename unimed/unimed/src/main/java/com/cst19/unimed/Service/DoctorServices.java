package com.cst19.unimed.Service;


import com.cst19.unimed.Entity.Doctor;
import com.cst19.unimed.Entity.DoctorBio;
import com.cst19.unimed.Repo.DoctorBioRepo;
import com.cst19.unimed.Repo.DoctorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class DoctorServices {

    @Autowired
    private DoctorRepo repo;

    @Autowired
    private DoctorBioRepo repobio;

    public void  saveorupdate(Doctor doctors){
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encrtyptPass = bcrypt.encode(doctors.getPassword());
        doctors.setPassword(encrtyptPass);
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
    public Doctor getUserByUserName(String username){
        return repo.findByUsername(username);
    }
}
