package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.BookingSlot;
import com.cst19.unimed.Entity.TimeSlot;
import com.cst19.unimed.Repo.BookingRepo;
import com.cst19.unimed.Repo.TimeSlotRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;
import java.util.Map;

@Service
public class BookingService {

    @Autowired
    private TimeSlotRepo timeSlotRepo;

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private MongoTemplate mongoTemplate;

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

    public BookingSlot updateBookingStatus(String bookingId, String status) {
        Optional<BookingSlot> optionalBookingSlot = bookingRepo.findById(bookingId);
        if (optionalBookingSlot.isPresent()) {
            BookingSlot bookingSlot = optionalBookingSlot.get();
            bookingSlot.setStatus(status);
            return bookingRepo.save(bookingSlot);
        } else {
            throw new RuntimeException("BookingSlot not found with id: " + bookingId);
        }
    }

    public BookingSlot updateBookingStatusByPatientId(String patientId, String status) {
        Query query = new Query();
        query.addCriteria(Criteria.where("patient_id").is(patientId));
        BookingSlot bookingSlot = mongoTemplate.findOne(query, BookingSlot.class);
        if (bookingSlot != null) {
            bookingSlot.setStatus(status);
            return bookingRepo.save(bookingSlot);
        } else {
            throw new RuntimeException("BookingSlot not found for patient_id: " + patientId);
        }
    }

    public BookingSlot checkOutBookingByPatientId(String patientId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("patient_id").is(patientId).and("status").is("consulted"));
        BookingSlot bookingSlot = mongoTemplate.findOne(query, BookingSlot.class);
        if (bookingSlot != null) {
            bookingSlot.setStatus("check-out");
            return bookingRepo.save(bookingSlot);
        } else {
            throw new RuntimeException("BookingSlot not found with patient_id: " + patientId + " and status: consulted");
        }
    }

    public long countByStatus(String status) {
        return bookingRepo.countByStatus(status);
    }
}
