package com.cst19.unimed.Entity;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class BlogNews {
    @Id
    private String _id;
    private String title;
    private String subTopic;
    private String subject;
    private String date;
    private String time;

    public BlogNews(String _id, String title, String subTopic, String subject, String date, String time) {
        this._id = _id;
        this.title = title;
        this.subTopic = subTopic;
        this.subject = subject;
        this.date = date;
        this.time = time;
    }

    public BlogNews() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTopic() {
        return subTopic;
    }

    public void setSubTopic(String subTopic) {
        this.subTopic = subTopic;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
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

    @Override
    public String toString() {
        return "BlogNews{" +
                "_id='" + _id + '\'' +
                ", title='" + title + '\'' +
                ", subTopic='" + subTopic + '\'' +
                ", subject='" + subject + '\'' +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                '}';
    }
}
