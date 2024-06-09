package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.MedicalRecords;
import com.cst19.unimed.Repo.MedicalRecordRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalReportServices {

    @Autowired
    private MedicalRecordRepo repo;

    public void save(MedicalRecords medicalRecords){
        repo.save(medicalRecords);
    }
}
