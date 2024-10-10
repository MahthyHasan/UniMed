package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.TimeSlot;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TimeSlotRepo extends MongoRepository<TimeSlot, String> {
    List<TimeSlot> findByIsAvailableTrue(); // Fetch only available time slots
}
