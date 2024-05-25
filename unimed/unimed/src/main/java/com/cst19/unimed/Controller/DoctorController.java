package com.cst19.unimed.Controller;


import com.cst19.unimed.Entity.Doctor;
import com.cst19.unimed.Service.DoctorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/doctor")


public class DoctorController {
    @Autowired
    private DoctorServices doctorService;

    @PostMapping(value = "/save")
    private String registerDoctor(@RequestBody Doctor doctors){
        doctorService.saveorupdate(doctors);
        return doctors.get_id();
    }

    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody Doctor loginDoctor) {
        Doctor doctor = doctorService.getUserByUsernameAndPassword(loginDoctor.getUsername(), loginDoctor.getPassword());
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

}
