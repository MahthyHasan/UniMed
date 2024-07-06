package com.cst19.unimed.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class BookingSlot {

    @Id
    private String _id;
    private String patient_id;
    private String time_slot_id;
    private String status;
    private String created_at;

    public BookingSlot(String _id, String patient_id, String time_slot_id, String status, String created_at) {
        this._id = _id;
        this.patient_id = patient_id;
        this.time_slot_id = time_slot_id;
        this.status = status;
        this.created_at = created_at;
    }

    public BookingSlot() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getPatient_id() {
        return patient_id;
    }

    public void setPatient_id(String patient_id) {
        this.patient_id = patient_id;
    }

    public String getTime_slot_id() {
        return time_slot_id;
    }

    public void setTime_slot_id(String time_slot_id) {
        this.time_slot_id = time_slot_id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "BookingSlot{" +
                "_id='" + _id + '\'' +
                ", patient_id='" + patient_id + '\'' +
                ", time_slot_id='" + time_slot_id + '\'' +
                ", status='" + status + '\'' +
                ", created_at='" + created_at + '\'' +
                '}';
    }
}
