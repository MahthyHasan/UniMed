package com.cst19.unimed.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonalDetails {

    private String name;
    private String nic;
    private String enrollmentNumber;
    private String gender;
    private int age;
    private int height;
    private int weight;
    private String bloodGroup;
}
