package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.Drug;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DrugRepo extends MongoRepository <Drug, String> {
}
