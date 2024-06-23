package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.Contactus;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactusRepo extends MongoRepository<Contactus,String> {

}
