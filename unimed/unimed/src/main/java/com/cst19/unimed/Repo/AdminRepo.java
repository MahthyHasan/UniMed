package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.Admin;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminRepo extends MongoRepository <Admin, String> {
    Admin findByUsernameAndPassword(String username, String password);
}
