package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.AdminBio;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminBioRepo extends MongoRepository<AdminBio, String> {
}
