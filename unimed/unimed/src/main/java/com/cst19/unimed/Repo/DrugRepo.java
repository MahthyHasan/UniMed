package com.cst19.unimed.Repo;
import com.cst19.unimed.Entity.Drug;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.time.LocalDate;
import java.util.List;

public interface DrugRepo extends MongoRepository<Drug, String> {
//    List<Drug> findByExpDateBetween(LocalDate startDate, LocalDate endDate);
}