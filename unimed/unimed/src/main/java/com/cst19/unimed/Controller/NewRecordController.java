package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.NewMedicalRecord;
import com.cst19.unimed.Repo.NewMedicalRecordRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/newmedicalrecords")
public class NewRecordController {

    private final NewMedicalRecordRepo newMedicalRecordRepo;

    @Autowired
    public NewRecordController(NewMedicalRecordRepo newMedicalRecordRepo) {
        this.newMedicalRecordRepo = newMedicalRecordRepo;
    }

    @PostMapping("/savenewmedrecord/{id}")
    public ResponseEntity<NewMedicalRecord> saveNewMedicalRecord(@PathVariable String id, @RequestBody NewMedicalRecord newMedicalRecord) {
        try {
            NewMedicalRecord record = new NewMedicalRecord();
            record.setId(id);
            record.setRecordId(newMedicalRecord.getRecordId());
            record.setSymptoms(newMedicalRecord.getSymptoms());
            record.setDiagnoses(newMedicalRecord.getDiagnoses());
            record.setPrescribedDrugs(newMedicalRecord.getPrescribedDrugs());

            NewMedicalRecord savedRecord = newMedicalRecordRepo.save(record);
            return new ResponseEntity<>(savedRecord, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
