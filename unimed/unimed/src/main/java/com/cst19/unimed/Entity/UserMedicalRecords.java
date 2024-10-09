package com.cst19.unimed.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List; // Import the List class

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserMedicalRecords {
    private String userId; // Ensure this is included to link records to users
    private String appointmentDate;
    private List<String> symptoms;   // List to hold symptoms
    private List<String> diagnoses;   // List to hold diagnoses
    private List<String> medicines;   // List to hold medicines
}
