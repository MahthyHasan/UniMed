package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.PersonalDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonalDetailsRepo extends MongoRepository<PersonalDetails, String> {

}
