package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.PersonalDetails;
import com.cst19.unimed.Repo.PersonalDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PersonalDetailsController {

    @Autowired
    PersonalDetailsRepo personalDetailsRepo;

    @PostMapping("/personaldetails")
    public void addPersonalDetails(@RequestBody PersonalDetails personalDetails) {
        personalDetailsRepo.save(personalDetails);
    }

    @GetMapping("/personaldetails")
    public List<PersonalDetails> getAllPersonalDetails() {
        return personalDetailsRepo.findAll();
    }
}
