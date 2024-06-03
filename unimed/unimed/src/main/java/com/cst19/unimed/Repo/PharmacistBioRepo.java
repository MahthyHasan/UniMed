package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.PharmacistBio;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PharmacistBioRepo extends MongoRepository<PharmacistBio, String> {
}
