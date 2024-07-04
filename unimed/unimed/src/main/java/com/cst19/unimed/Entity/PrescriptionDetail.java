package com.cst19.unimed.Entity;

public class PrescriptionDetail {
    private String drugName;
    private String dosage;
    private String duration;

    public PrescriptionDetail(String drugName, String dosage, String duration) {
        this.drugName = drugName;
        this.dosage = dosage;
        this.duration = duration;
    }

    public PrescriptionDetail() {
    }

    public String getDrugName() {
        return drugName;
    }

    public void setDrugName(String drugName) {
        this.drugName = drugName;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    @Override
    public String toString() {
        return "PrescriptionDetail{" +
                "drugName='" + drugName + '\'' +
                ", dosage='" + dosage + '\'' +
                ", duration='" + duration + '\'' +
                '}';
    }
}
