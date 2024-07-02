package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.MedicalRecords;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface MedicalRecordRepo extends MongoRepository<MedicalRecords, String> {
    @Query("{'patientId': ?0}")
    MedicalRecords findTopByPatientIdOrderByDateDescTimeDesc(String patientId);
}
