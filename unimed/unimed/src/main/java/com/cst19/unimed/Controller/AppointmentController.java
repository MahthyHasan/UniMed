package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Appointment;
import com.cst19.unimed.Repo.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {

    @Autowired
    private AppointmentRepo appointmentRepo;

    @PostMapping("/addAppointment")
    public ResponseEntity<String> addAppointment(@RequestBody Appointment appointment) {
        try {
            appointmentRepo.save(appointment);
            return ResponseEntity.ok("Appointment added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding appointment");
        }
    }


    @GetMapping("/appointments/{patientId}")
    public ResponseEntity<List<Appointment>> getAppointmentsByPatient(@PathVariable String patientId) {
        List<Appointment> appointments = appointmentRepo.findByPatient(patientId);
        if (appointments.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(appointments);
        }
        return ResponseEntity.ok(appointments);
    }}
