package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.PersonalDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface PersonalDetailsRepo extends MongoRepository<PersonalDetails, String> {
    Optional<PersonalDetails> findByEmail(String email);
}
