package com.cst19.unimed.Repo;


import com.cst19.unimed.Entity.MedicalRecords;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;


public interface MedicalRecordRepo extends MongoRepository<MedicalRecords, String> {

    Optional<MedicalRecords> findFirstByPatientIdOrderByDateDescTimeDesc(String patientId);

    List<MedicalRecords> findAllByPatientIdOrderByDateDescTimeDesc(String patientId);
}
