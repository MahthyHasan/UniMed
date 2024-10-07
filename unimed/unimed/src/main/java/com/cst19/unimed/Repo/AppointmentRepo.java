package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AppointmentRepo extends MongoRepository<Appointment, String> {
    List<Appointment> findByPatient(String patient);
}
