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
        appointmentRepo.save(appointment);
        return ResponseEntity.ok("Appointment added successfully");
    }

    @GetMapping("/appointments/{patientId}")
    public ResponseEntity<List<Appointment>> getAppointmentsByPatient(@PathVariable String patientId) {
        List<Appointment> appointments = appointmentRepo.findByPatient(patientId);
        return ResponseEntity.ok(appointments);
    }
}
