package com.cst19.unimed.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;

@Document
public class Drug {

    @Id
    private String _id;
    private String srid;
    private String drug_name;
    private String dosage_forms;
    private String strength;
    private String quantity;
    private String manufacturer;
    private LocalDate exp_date;
    private String availability_status;

    public Drug(String availability_status, LocalDate exp_date, String manufacturer, String quantity, String strength, String dosage_forms, String drug_name, String srid, String _id) {
        this.availability_status = availability_status;
        this.exp_date = exp_date;
        this.manufacturer = manufacturer;
        this.quantity = quantity;
        this.strength = strength;
        this.dosage_forms = dosage_forms;
        this.drug_name = drug_name;
        this.srid = srid;
        this._id = _id;
    }

    public Drug() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getSrid() {
        return srid;
    }

    public void setSrid(String srid) {
        this.srid = srid;
    }

    public String getDrug_name() {
        return drug_name;
    }

    public void setDrug_name(String drug_name) {
        this.drug_name = drug_name;
    }

    public String getDosage_forms() {
        return dosage_forms;
    }

    public void setDosage_forms(String dosage_forms) {
        this.dosage_forms = dosage_forms;
    }

    public String getStrength() {
        return strength;
    }

    public void setStrength(String strength) {
        this.strength = strength;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public LocalDate getExp_date() {
        return exp_date;
    }

    public void setExp_date(LocalDate exp_date) {
        this.exp_date = exp_date;
    }

    public String getAvailability_status() {
        return availability_status;
    }

    public void setAvailability_status(String availability_status) {
        this.availability_status = availability_status;
    }

    @Override
    public String toString() {
        return "Drug{" +
                "_id='" + _id + '\'' +
                ", srid='" + srid + '\'' +
                ", drug_name='" + drug_name + '\'' +
                ", dosage_forms='" + dosage_forms + '\'' +
                ", strength='" + strength + '\'' +
                ", quantity='" + quantity + '\'' +
                ", manufacturer='" + manufacturer + '\'' +
                ", exp_date=" + (exp_date != null ? exp_date.toString() : "null") +
                ", availability_status='" + availability_status + '\'' +
                '}';
    }
}
