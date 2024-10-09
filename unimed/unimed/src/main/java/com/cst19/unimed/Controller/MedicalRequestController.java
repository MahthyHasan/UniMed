package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.MedicalRequest;
import com.cst19.unimed.Repo.MedicalRequestRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;  // <-- Import this
import org.springframework.http.HttpStatus; // <-- Optional: if you want to use custom status codes

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class MedicalRequestController {

    @Autowired
    MedicalRequestRepo medicalRequestRepo;

    @PostMapping("/submitMedicalRequest")
    public ResponseEntity<?> submitMedicalRequest(@RequestBody MedicalRequest medicalRequest) {
        medicalRequestRepo.save(medicalRequest); // Save the request
        return ResponseEntity.ok("Medical Request submitted successfully");
    }
}
