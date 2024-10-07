package com.cst19.unimed.Controller;

import  com.cst19.unimed.Entity.Appointment;
import com.cst19.unimed.Repo.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {

    @Autowired
    private AppointmentRepo appointmentRepo;

    @PostMapping("/addAppointment")
    public ResponseEntity<String> addAppointment(@RequestBody Appointment appointment) {
        try {
            appointmentRepo.save(appointment);
            return new ResponseEntity<>("Appointment booked successfully!", HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Error while saving appointment: " + e.getMessage());
            return new ResponseEntity<>("Failed to book appointment.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
