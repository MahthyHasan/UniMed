package com.cst19.unimed.Controller;


import com.cst19.unimed.Entity.MedicalRecords;
import com.cst19.unimed.Service.MedicalServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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

    @GetMapping("/latest/{patientId}")
    public MedicalRecords getLatestMedicalRecord(@PathVariable String patientId) {
        return medicalServices.getLatestMedicalRecord(patientId);
    }

    @GetMapping(value = "/all/{patientId}")
    private ResponseEntity<List<MedicalRecords>> getAllMedicalRecords(@PathVariable String patientId){
        List<MedicalRecords> allRecords = medicalServices.getAllMedicalRecords(patientId);
        return ResponseEntity.ok(allRecords);
    }

    @GetMapping("/pending/{patientId}")
    public ResponseEntity<List<MedicalRecords>> getMedicalRecordsWithPendingDrugs(@PathVariable String patientId) {
        List<MedicalRecords> records = medicalServices.getMedicalRecordsWithPendingDrugs(patientId);
        return ResponseEntity.ok(records);
    }

    @PutMapping("/updateDrugIssuedStatus/{recordId}")
    public ResponseEntity<?> updateDrugIssuedStatus(@PathVariable String recordId, @RequestParam Boolean status) {
        medicalServices.updateDrugIssuedStatus(recordId, status);
        return ResponseEntity.ok("Drug issued status updated successfully.");
    }

}
