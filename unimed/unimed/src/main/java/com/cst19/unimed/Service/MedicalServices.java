package com.cst19.unimed.Service;


import com.cst19.unimed.Entity.MedicalRecords;
import com.cst19.unimed.Repo.MedicalRecordRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;
import java.util.List;

@Service
public class MedicalServices {

    @Autowired
    private MedicalRecordRepo repo;
    public void saveorupdate(MedicalRecords medicalRecords){
        repo.save(medicalRecords);
    }
    public MedicalRecords getLatestMedicalRecord(String patientId) {
        return repo.findFirstByPatientIdOrderByDateDescTimeDesc(patientId)
                .orElseThrow(() -> new RuntimeException("No medical record found for patientId: " + patientId));
    }

    public List<MedicalRecords> getAllMedicalRecords(String patientId) {
        return repo.findAllByPatientIdOrderByDateDescTimeDesc(patientId);
    }

    public List<MedicalRecords> getMedicalRecordsWithPendingDrugs(String patientId) {
        return repo.findByPatientIdAndDrugIssuedFalse(patientId);
    }

    public void updateDrugIssuedStatus(String recordId, Boolean status) {
        MedicalRecords record = repo.findById(recordId)
                .orElseThrow(() -> new RuntimeException("Medical record not found for id: " + recordId));
        record.setDrugIssued(status);
        repo.save(record);
    }

    public MedicalRecords getMedicalRecordById(String recordId) {
        return repo.findById(recordId)
                .orElseThrow(() -> new RuntimeException("Medical record not found for id: " + recordId));
    }

}
