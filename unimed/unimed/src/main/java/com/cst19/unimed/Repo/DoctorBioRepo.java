package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.DoctorBio;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DoctorBioRepo extends MongoRepository<DoctorBio, String> {
}
