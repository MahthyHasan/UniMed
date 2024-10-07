package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepo extends MongoRepository<Appointment, String> {
}
