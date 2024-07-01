package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Personal_Info;
import com.cst19.unimed.Repo.Personal_InfoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Personal_InfoController {

    @Autowired
    Personal_InfoRepo personalInfoRepo;

    @PostMapping("/personaldetails")
    public void addPersonalDetails(@RequestBody Personal_Info personalInfo){
        personalInfoRepo.save(personalInfo);
    }

    @GetMapping("/personaldetails/{id}")
    public Personal_Info getPersonalDetails(@PathVariable String id) {
        return personalInfoRepo.findById(id).orElse(null);
    }
}
