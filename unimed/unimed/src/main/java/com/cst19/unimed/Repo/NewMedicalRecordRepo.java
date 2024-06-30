package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.NewMedicalRecord;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface NewMedicalRecordRepo extends MongoRepository<NewMedicalRecord, String>{


}
