package cst.group19.uniMed.Repo;

import cst.group19.uniMed.Entitiy.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


public interface UserRepo extends MongoRepository<User, String> {
}
