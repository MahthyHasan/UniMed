package com.cst19.unimed.Repo;


import com.cst19.unimed.Entity.MedicalRecords;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.data.mongodb.repository.Aggregation;


public interface MedicalRecordRepo extends MongoRepository<MedicalRecords, String> {

    Optional<MedicalRecords> findFirstByPatientIdOrderByDateDescTimeDesc(String patientId);
    List<MedicalRecords> findAllByPatientIdOrderByDateDescTimeDesc(String patientId);
    List<MedicalRecords> findByPatientIdAndDrugIssuedFalse(String patientId);

    @Aggregation(pipeline = {
            "{ '$unwind': '$diaognises' }",
            "{ '$group': { '_id': '$diaognises', 'count': { '$sum': 1 } } }",
            "{ '$sort': { 'count': -1 } }",
            "{ '$limit': 1 }"
    })
    List<CommonDiagnosis> findMostCommonDiagnosis();

    List<MedicalRecords> findByDate(String date);

}
