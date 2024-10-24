package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.ChannelledLog;
import com.cst19.unimed.Repo.ChannelledLogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.time.LocalDate;

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

    public long getTotalPatientsForToday() {
        String today = LocalDate.now().toString(); // Format: yyyy-MM-dd
        return channelledLogRepo.countByDate(today);
    }

    private String[] appendTimestamp(String[] timestamps, String newTimestamp) {
        String[] newTimestamps = Arrays.copyOf(timestamps, timestamps.length + 1);
        newTimestamps[timestamps.length] = newTimestamp;
        return newTimestamps;
    }

    private String calculateTotalChannelledTime(ChannelledLog log) {
        // Parse login time
        LocalDateTime loginTime = LocalDateTime.parse(log.getLoginTime(), formatter);

        // Calculate time spent during pauses
        long totalPausedDuration = 0;
        String[] pausedTimes = log.getPausedTime();
        for (int i = 0; i < pausedTimes.length; i += 2) {
            if (i + 1 < pausedTimes.length) {
                LocalDateTime pauseStart = LocalDateTime.parse(pausedTimes[i], formatter);
                LocalDateTime pauseEnd = LocalDateTime.parse(pausedTimes[i + 1], formatter);
                totalPausedDuration += Duration.between(pauseStart, pauseEnd).toSeconds();
            }
        }

        // Calculate total continued time
        long totalContinuedDuration = 0;
        String[] continuedTimes = log.getContinuedTime();
        for (String continuedTime : continuedTimes) {
            LocalDateTime continueTime = LocalDateTime.parse(continuedTime, formatter);
            totalContinuedDuration += Duration.between(loginTime, continueTime).toSeconds();
            loginTime = continueTime; // Update loginTime to the last continued time
        }

        // Calculate total channelled time
        long totalChannelledTime = totalContinuedDuration - totalPausedDuration;

        return String.valueOf(totalChannelledTime);
    }
    public void saveTotalLoggedTime(String doctorId) {
        ChannelledLog log = channelledLogRepo.findById(doctorId).orElse(null);
        if (log != null) {
            log.setTotalChannelledTime(calculateTotalChannelledTime(log)); // Assuming calculateTotalChannelledTime is updated as needed
            channelledLogRepo.save(log);
        } else {
            throw new IllegalArgumentException("No log found for doctorId: " + doctorId);
        }
    }
}
