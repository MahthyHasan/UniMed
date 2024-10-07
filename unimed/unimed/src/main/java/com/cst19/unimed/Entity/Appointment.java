package com.cst19.unimed.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {
    private String patient; // User ID of the patient
    private String appointmentDate;
    private String startTime;
    private String status; // Scheduled, Completed, Cancelled, etc.
    private String disease;
}

