package com.cst19.unimed.Entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;


@Document(collection = "medical_records")
public class NewMedicalRecord {
    @Id
    private String id; // Use String for MongoDB

    private String recordId;
    private List<String> symptoms;
    private List<String> diagnoses;
    private List<PrescribedDrug> prescribedDrugs;

    // Constructors, getters, and setters

    // Default constructor
    public NewMedicalRecord () {
    }

    // Constructor with parameters
    public NewMedicalRecord (String recordId, List<String> symptoms, List<String> diagnoses, List<PrescribedDrug> prescribedDrugs) {
        this.recordId = recordId;
        this.symptoms = symptoms;
        this.diagnoses = diagnoses;
        this.prescribedDrugs = prescribedDrugs;
    }

    // Getters and setters for all fields
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRecordId() {
        return recordId;
    }

    public void setRecordId(String recordId) {
        this.recordId = recordId;
    }

    public List<String> getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(List<String> symptoms) {
        this.symptoms = symptoms;
    }

    public List<String> getDiagnoses() {
        return diagnoses;
    }

    public void setDiagnoses(List<String> diagnoses) {
        this.diagnoses = diagnoses;
    }

    public List<PrescribedDrug> getPrescribedDrugs() {
        return prescribedDrugs;
    }

    public void setPrescribedDrugs(List<PrescribedDrug> prescribedDrugs) {
        this.prescribedDrugs = prescribedDrugs;
    }

    // Inner class PrescribedDrug
    public static class PrescribedDrug {
        private String drug;
        private String dosage;
        private String days;

        // Constructors, getters, and setters for PrescribedDrug
        // Ensure to define equals and hashCode methods if necessary

        // Getters and setters
        public String getDrug() {
            return drug;
        }

        public void setDrug(String drug) {
            this.drug = drug;
        }

        public String getDosage() {
            return dosage;
        }

        public void setDosage(String dosage) {
            this.dosage = dosage;
        }

        public String getDays() {
            return days;
        }

        public void setDays(String days) {
            this.days = days;
        }
    }





}
