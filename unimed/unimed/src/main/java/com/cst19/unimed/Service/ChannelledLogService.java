package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.ChannelledLog;
import com.cst19.unimed.Repo.ChannelledLogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

@Service
public class ChannelledLogService {

    @Autowired
    private ChannelledLogRepo channelledLogRepo;

    private DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public void logIn(String doctorId) {
        String currentTimestamp = LocalDateTime.now().format(formatter);
        ChannelledLog log = new ChannelledLog(doctorId, doctorId, currentTimestamp.split(" ")[0], currentTimestamp, "0", new String[]{}, new String[]{}, "", "available");
        channelledLogRepo.save(log);
    }

    public void pauseChanneling(String doctorId) {
        ChannelledLog log = channelledLogRepo.findById(doctorId).orElse(null);
        if (log != null) {
            String currentTimestamp = LocalDateTime.now().format(formatter);
            log.setPausedTime(appendTimestamp(log.getPausedTime(), currentTimestamp));
            log.setStatus("paused");
            channelledLogRepo.save(log);
        }
    }

    public void continueChanneling(String doctorId) {
        ChannelledLog log = channelledLogRepo.findById(doctorId).orElse(null);
        if (log != null) {
            String currentTimestamp = LocalDateTime.now().format(formatter);
            log.setContinuedTime(appendTimestamp(log.getContinuedTime(), currentTimestamp));
            log.setStatus("available");
            channelledLogRepo.save(log);
        }
    }

    public void logOut(String doctorId) {
        ChannelledLog log = channelledLogRepo.findById(doctorId).orElse(null);
        if (log != null) {
            String currentTimestamp = LocalDateTime.now().format(formatter);
            log.setLastlogoutTime(currentTimestamp);
            log.setTotalChannelledTime(calculateTotalChannelledTime(log));
            channelledLogRepo.save(log);
        }
    }

    private String[] appendTimestamp(String[] timestamps, String newTimestamp) {
        String[] newTimestamps = Arrays.copyOf(timestamps, timestamps.length + 1);
        newTimestamps[timestamps.length] = newTimestamp;
        return newTimestamps;
    }

    private String calculateTotalChannelledTime(ChannelledLog log) {
        // Implementation for calculating total channeled time
        return "0"; // Placeholder for the actual implementation
    }
}
