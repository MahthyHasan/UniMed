package com.cst19.unimed.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MedicalRequest {
    private String userId;
    private String requestType; // 'Medical Report Request'
    private String selectedDate; // Add the selected date field if not present
}
