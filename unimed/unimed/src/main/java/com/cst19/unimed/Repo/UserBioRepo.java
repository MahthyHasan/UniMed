package com.cst19.unimed.Repo;



import com.cst19.unimed.Entity.UserBio;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserBioRepo extends MongoRepository<UserBio, String> {
}
