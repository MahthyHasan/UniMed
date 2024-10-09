package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.UserMedicalRecords;
import com.cst19.unimed.Repo.UserMedicalRecordsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/UserMedicalRecords")
@CrossOrigin(origins = "http://localhost:3000")
public class UserMedicalRecordsController {

    @Autowired
    private UserMedicalRecordsRepo userMedicalRecordsRepo;

    @GetMapping("/all/{userId}")
    public ResponseEntity<List<UserMedicalRecords>> getAllRecords(@PathVariable String userId) {
        List<UserMedicalRecords> records = userMedicalRecordsRepo.findByUserId(userId);
        if (records.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(records, HttpStatus.OK);
    }
}
