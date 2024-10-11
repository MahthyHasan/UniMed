package com.cst19.unimed.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Document(collection = "medicalRecords") // The name of the MongoDB collection
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedicalRecord {
    private String patientId; // This corresponds to the user's ID
    private LocalDate recordDate; // The date of the medical record
    // Add other relevant fields as needed, for example:
    // private String diagnosis;
    // private String prescription;
}
