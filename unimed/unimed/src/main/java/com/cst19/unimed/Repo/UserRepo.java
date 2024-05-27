package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<User, String> {
    User findByUsernameAndPassword(String username, String password);
    User findByEmail(String email);
    User findByVerificationToken(String token);
}
