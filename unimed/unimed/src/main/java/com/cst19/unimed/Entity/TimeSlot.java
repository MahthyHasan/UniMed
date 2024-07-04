package com.cst19.unimed.Entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class TimeSlot {
    @Id
    private String _id;
    private String start_time;
    private String end_time;
    private String date;
    private Boolean isAvailable;

    public TimeSlot(String _id, String start_time, String end_time, String date, Boolean isAvailable) {
        this._id = _id;
        this.start_time = start_time;
        this.end_time = end_time;
        this.date = date;
        this.isAvailable = isAvailable;
    }

    public TimeSlot() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getStart_time() {
        return start_time;
    }

    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }

    public String getEnd_time() {
        return end_time;
    }

    public void setEnd_time(String end_time) {
        this.end_time = end_time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Boolean getAvailable() {
        return isAvailable;
    }

    public void setAvailable(Boolean available) {
        isAvailable = available;
    }

    @Override
    public String toString() {
        return "TimeSlot{" +
                "_id='" + _id + '\'' +
                ", start_time='" + start_time + '\'' +
                ", end_time='" + end_time + '\'' +
                ", date='" + date + '\'' +
                ", isAvailable=" + isAvailable +
                '}';
    }
}
