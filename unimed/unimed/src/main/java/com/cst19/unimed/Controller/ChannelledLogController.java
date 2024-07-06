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
}
