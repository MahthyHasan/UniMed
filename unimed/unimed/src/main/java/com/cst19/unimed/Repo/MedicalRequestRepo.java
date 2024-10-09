package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.MedicalRequest;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedicalRequestRepo extends MongoRepository<MedicalRequest, String> {
}
