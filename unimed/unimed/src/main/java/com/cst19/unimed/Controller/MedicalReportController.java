package com.cst19.unimed.Controller;


import com.cst19.unimed.Entity.MedicalRecords;
import com.cst19.unimed.Service.MedicalServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/medicalRecords")
public class MedicalReportController {

    @Autowired
    private MedicalServices medicalServices;


    @PostMapping(value = "/save")
    private ResponseEntity<?> registerMedicalRecord(@RequestBody MedicalRecords medicalRecords){
        medicalServices.saveorupdate(medicalRecords);
        return ResponseEntity.ok("Medical Record registered successfully.");
    }

}
