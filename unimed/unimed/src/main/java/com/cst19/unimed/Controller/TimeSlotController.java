package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.TimeSlot;
import com.cst19.unimed.Repo.TimeSlotRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TimeSlotController {

    @Autowired
    private TimeSlotRepo timeSlotRepo;

    @GetMapping("/availableTimeSlots")
    public ResponseEntity<List<TimeSlot>> getAvailableTimeSlots() {
        try {
            List<TimeSlot> availableSlots = timeSlotRepo.findByIsAvailableTrue();
            return ResponseEntity.ok(availableSlots);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }

    }}