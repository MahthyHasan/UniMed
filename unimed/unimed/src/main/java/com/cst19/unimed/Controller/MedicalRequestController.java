package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.MedicalRequest;
import com.cst19.unimed.Repo.MedicalRequestRepo;
import com.cst19.unimed.Repo.MedicalRecordsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MedicalRequestController {

    @Autowired
    MedicalRequestRepo medicalRequestRepo;

    @Autowired
    MedicalRecordsRepo medicalRecordsRepo;

    @PostMapping("/submitMedicalRequest")
    public ResponseEntity<?> submitMedicalRequest(@RequestBody MedicalRequest medicalRequest) {
        medicalRequestRepo.save(medicalRequest);
        return ResponseEntity.ok("Medical Request submitted successfully");
    }


    @GetMapping("/getMedicalDates/{userId}")
    public ResponseEntity<List<String>> getMedicalDates(@PathVariable String userId) {
        List<String> dates = medicalRecordsRepo.findDatesByPatientId(userId);
        return ResponseEntity.ok(dates);
    }
}
