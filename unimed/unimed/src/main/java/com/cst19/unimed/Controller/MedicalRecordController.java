package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.MedicalRecords;
import com.cst19.unimed.Service.MedicalReportServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/medicalrecords" )
public class MedicalRecordController {

    @Autowired
    private MedicalReportServices medicalReportServices;

    @PostMapping(value = "/save")
    private String RegisterMedicalRecord(@RequestBody MedicalRecords medicalRecords){

        medicalReportServices.save(medicalRecords);
        return medicalRecords.get_id();
    }
}
