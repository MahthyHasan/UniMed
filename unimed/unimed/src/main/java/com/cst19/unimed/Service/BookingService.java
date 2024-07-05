package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.BookingSlot;
import com.cst19.unimed.Entity.TimeSlot;
import com.cst19.unimed.Repo.BookingRepo;
import com.cst19.unimed.Repo.TimeSlotRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private TimeSlotRepo timeSlotRepo;

    @Autowired
    private BookingRepo bookingRepo;

    public BookingSlot createBooking(String patientId) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime endTime = now.plusMinutes(10);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        TimeSlot timeSlot = new TimeSlot();
        timeSlot.setStart_time(now.format(formatter));
        timeSlot.setEnd_time(endTime.format(formatter));
        timeSlot.setDate(now.toLocalDate().toString());
        timeSlot.setAvailable(false);

        TimeSlot savedTimeSlot = timeSlotRepo.save(timeSlot);

        BookingSlot bookingSlot = new BookingSlot();
        bookingSlot.setPatient_id(patientId);
        bookingSlot.setTime_slot_id(savedTimeSlot.get_id());
        bookingSlot.setStatus("checked_in");
        bookingSlot.setCreated_at(now.format(formatter));

        return bookingRepo.save(bookingSlot);
    }
}
