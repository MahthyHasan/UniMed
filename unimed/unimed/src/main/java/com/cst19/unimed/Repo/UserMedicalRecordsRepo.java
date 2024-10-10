package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.UserMedicalRecords;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface UserMedicalRecordsRepo extends MongoRepository<UserMedicalRecords, String> {
    List<UserMedicalRecords> findByUserId(String userId); // Method to find records by userId
}
