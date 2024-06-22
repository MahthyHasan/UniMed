package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Contactus;
import com.cst19.unimed.Repo.ContactusRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")

public class ContactusController {
@Autowired
    ContactusRepo contactusRepo;

    @PostMapping("/contactus")
    public void addContact(@RequestBody Contactus contactus){
      contactusRepo.save(contactus);
    }
}
