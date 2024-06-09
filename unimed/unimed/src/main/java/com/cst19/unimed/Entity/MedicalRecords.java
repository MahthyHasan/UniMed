package com.cst19.unimed.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class MedicalRecords {

    @Id
    private String _id;
    private String name;
    private String age;

    public MedicalRecords(String _id, String name, String age) {
        this._id = _id;
        this.name = name;
        this.age = age;
    }

    public MedicalRecords() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "MedicalRecords{" +
                "_id='" + _id + '\'' +
                ", name='" + name + '\'' +
                ", age='" + age + '\'' +
                '}';
    }
}
