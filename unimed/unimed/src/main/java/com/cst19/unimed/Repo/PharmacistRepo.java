package com.cst19.unimed.Repo;


import com.cst19.unimed.Entity.Pharmacist;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PharmacistRepo extends MongoRepository <Pharmacist, String>{
    Pharmacist findByUsernameAndPassword(String username, String password);
    Pharmacist findByUsername(String username);
}
