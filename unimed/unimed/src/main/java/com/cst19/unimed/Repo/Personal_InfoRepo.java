package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.Personal_Info;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface Personal_InfoRepo extends MongoRepository<Personal_Info, String> {
}
