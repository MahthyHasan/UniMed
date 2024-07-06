package com.cst19.unimed.Entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document
public class ChannelledLog {
    @Id
    private String _id;
    private String doctor_id;
    private String date;
    private String loginTime;
    private String totalChannelledTime;
    private String[] pausedTime;
    private String[] continuedTime;
    private String lastlogoutTime;
    private String status;

    public ChannelledLog(String _id, String doctor_id, String date, String loginTime, String totalChannelledTime, String[] pausedTime, String[] continuedTime, String lastlogoutTime, String status) {
        this._id = _id;
        this.doctor_id = doctor_id;
        this.date = date;
        this.loginTime = loginTime;
        this.totalChannelledTime = totalChannelledTime;
        this.pausedTime = pausedTime;
        this.continuedTime = continuedTime;
        this.lastlogoutTime = lastlogoutTime;
        this.status = status;
    }

    public ChannelledLog() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(String doctor_id) {
        this.doctor_id = doctor_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLoginTime() {
        return loginTime;
    }

    public void setLoginTime(String loginTime) {
        this.loginTime = loginTime;
    }

    public String getTotalChannelledTime() {
        return totalChannelledTime;
    }

    public void setTotalChannelledTime(String totalChannelledTime) {
        this.totalChannelledTime = totalChannelledTime;
    }

    public String[] getPausedTime() {
        return pausedTime;
    }

    public void setPausedTime(String[] pausedTime) {
        this.pausedTime = pausedTime;
    }

    public String[] getContinuedTime() {
        return continuedTime;
    }

    public void setContinuedTime(String[] continuedTime) {
        this.continuedTime = continuedTime;
    }

    public String getLastlogoutTime() {
        return lastlogoutTime;
    }

    public void setLastlogoutTime(String lastlogoutTime) {
        this.lastlogoutTime = lastlogoutTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "ChannelledLog{" +
                "_id='" + _id + '\'' +
                ", doctor_id='" + doctor_id + '\'' +
                ", date='" + date + '\'' +
                ", loginTime='" + loginTime + '\'' +
                ", totalChannelledTime='" + totalChannelledTime + '\'' +
                ", pausedTime=" + Arrays.toString(pausedTime) +
                ", continuedTime=" + Arrays.toString(continuedTime) +
                ", lastlogoutTime='" + lastlogoutTime + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
