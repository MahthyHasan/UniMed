package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.TimeSlot;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TimeSlotRepo extends MongoRepository<TimeSlot, String> {
}
