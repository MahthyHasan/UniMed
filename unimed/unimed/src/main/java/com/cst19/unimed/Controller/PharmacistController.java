package com.cst19.unimed.Controller;


import com.cst19.unimed.Entity.Pharmacist;
import com.cst19.unimed.Service.PharmasistServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/pharmacist")

public class PharmacistController {
    @Autowired
    private PharmasistServices pharmasistServices;

    @PostMapping(value = "/save")
    private  String registerPharmacist(@RequestBody Pharmacist pharmacists){
        pharmasistServices.saveorupdate(pharmacists);
        return pharmacists.get_id();
    }

    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody Pharmacist loginPharmacist){
        Pharmacist pharmacist = pharmasistServices.getUserByUsernameAndPassword(loginPharmacist.getUsername(), loginPharmacist.getPassword());
        if (pharmacist != null) {
            return ResponseEntity.ok(pharmacist);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}
