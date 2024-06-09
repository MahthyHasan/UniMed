package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.MedicalRecords;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedicalRecordRepo extends MongoRepository<MedicalRecords, String> {
}
