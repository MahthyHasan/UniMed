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
    private Boolean drugIssued;

    public MedicalRecords(String _id, String patientId, String[] symptoms, String[] diaognises, String[] priscripedMedicines, String date, String time, String doctorId, Boolean drugIssued) {
        this._id = _id;
        this.patientId = patientId;
        this.symptoms = symptoms;
        this.diaognises = diaognises;
        this.priscripedMedicines = priscripedMedicines;
        this.date = date;
        this.time = time;
        this.doctorId = doctorId;
        this.drugIssued = drugIssued;
    }

    public MedicalRecords() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }

    public String[] getSymptoms() {
        return symptoms;
    }

    public void setSymptoms(String[] symptoms) {
        this.symptoms = symptoms;
    }

    public String[] getDiaognises() {
        return diaognises;
    }

    public void setDiaognises(String[] diaognises) {
        this.diaognises = diaognises;
    }

    public String[] getPriscripedMedicines() {
        return priscripedMedicines;
    }

    public void setPriscripedMedicines(String[] priscripedMedicines) {
        this.priscripedMedicines = priscripedMedicines;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(String doctorId) {
        this.doctorId = doctorId;
    }

    public Boolean getDrugIssued() {
        return drugIssued;
    }

    public void setDrugIssued(Boolean drugIssued) {
        this.drugIssued = drugIssued;
    }

    @Override
    public String toString() {
        return "MedicalRecords{" +
                "_id='" + _id + '\'' +
                ", patientId='" + patientId + '\'' +
                ", symptoms=" + Arrays.toString(symptoms) +
                ", diaognises=" + Arrays.toString(diaognises) +
                ", priscripedMedicines=" + Arrays.toString(priscripedMedicines) +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", doctorId='" + doctorId + '\'' +
                ", drugIssued=" + drugIssued +
                '}';
    }
}
