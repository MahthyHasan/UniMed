package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;



public interface DoctorRepo extends MongoRepository <Doctor, String> {
    Doctor findByUsernameAndPassword(String username, String password);
}
