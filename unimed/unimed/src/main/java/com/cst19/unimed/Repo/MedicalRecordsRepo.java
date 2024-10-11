package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.MedicalRecord;  // Make sure this import statement is present
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalRecordsRepo extends MongoRepository<MedicalRecord, String> {
    // Custom query to get the list of dates for a specific patient (userId)
    List<String> findDatesByPatientId(String patientId);
}
