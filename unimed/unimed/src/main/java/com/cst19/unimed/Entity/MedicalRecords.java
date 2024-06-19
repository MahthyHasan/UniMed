package com.cst19.unimed.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document
public class MedicalRecords {

    @Id
    private String _id;
    private String patientId;
    private String[] symptoms;
    private String[] diaognises;
    private String[] priscripedMedicines;
    private String date;
    private String time;
    private String doctorId;

}
