package cst.group19.uniMed.Service;

import cst.group19.uniMed.Entitiy.User;
import cst.group19.uniMed.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo repo;
    public void saveorupdate(User users) {

        repo.save(users);

    }

    public Iterable<User> listAll() {
        return this.repo.findAll();
    }

    public void deleteUser(String id) {
        repo.deleteById(id);
    }

    public User getUserbyID(String userid) {
        return repo.findById(userid).get();
    }
}
