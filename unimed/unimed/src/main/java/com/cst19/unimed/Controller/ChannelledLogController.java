package com.cst19.unimed.Controller;

import com.cst19.unimed.Service.ChannelledLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/channelledLog")
public class ChannelledLogController {

    @Autowired
    private ChannelledLogService channelledLogService;

    @PostMapping(value = "/login/{doctorId}")
    public ResponseEntity<?> doctorLogin(@PathVariable String doctorId) {
        channelledLogService.logIn(doctorId);
        return ResponseEntity.ok("Doctor logged in successfully.");
    }

    @PostMapping(value = "/pause/{doctorId}")
    public ResponseEntity<?> pauseChanneling(@PathVariable String doctorId) {
        channelledLogService.pauseChanneling(doctorId);
        return ResponseEntity.ok("Channeling paused successfully.");
    }

    @PostMapping(value = "/continue/{doctorId}")
    public ResponseEntity<?> continueChanneling(@PathVariable String doctorId) {
        channelledLogService.continueChanneling(doctorId);
        return ResponseEntity.ok("Channeling continued successfully.");
    }

    @PostMapping(value = "/logout/{doctorId}")
    public ResponseEntity<?> doctorLogout(@PathVariable String doctorId) {
        channelledLogService.logOut(doctorId);
        return ResponseEntity.ok("Doctor logged out successfully.");
    }

    @GetMapping("/total-today")
    public ResponseEntity<Long> getTotalPatientsForToday() {
        long totalPatients = channelledLogService.getTotalPatientsForToday();
        return new ResponseEntity<>(totalPatients, HttpStatus.OK);
    }
    // New endpoint to get the most common health issue for today
    @PostMapping(value = "/save-total-time/{doctorId}")
    public ResponseEntity<?> saveTotalLoggedTime(@PathVariable String doctorId) {
        try {
            channelledLogService.saveTotalLoggedTime(doctorId);
            return ResponseEntity.ok("Total logged time saved successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while saving the total logged time.");
        }
    }
}
