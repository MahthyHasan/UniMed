package com.cst19.unimed.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

@Document(collection = "userbio")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PersonalDetails {
    @Id
    private String email;
    private String name;
    private String nic;
    private String enrollmentNumber;
    private String gender;
    private int age;
    private int height;
    private int weight;
    private String bloodGroup;
}
