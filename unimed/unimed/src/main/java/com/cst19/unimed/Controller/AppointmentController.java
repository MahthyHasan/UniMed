package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Appointment;
import com.cst19.unimed.Repo.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3001")
public class AppointmentController {

    @Autowired
    AppointmentRepo appointmentRepo;

    @PostMapping("/appointments")
    public Appointment addAppointment(@RequestBody Appointment appointment) {
        return appointmentRepo.save(appointment);
    }

    @GetMapping("/appointments")
    public List<Appointment> getAllAppointments() {
        return appointmentRepo.findAll();
    }
}
