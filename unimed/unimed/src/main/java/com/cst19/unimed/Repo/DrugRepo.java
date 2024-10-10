package com.cst19.unimed.Repo;
import com.cst19.unimed.Entity.Drug;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface DrugRepo extends MongoRepository<Drug, String> {
    @Query("{ 'exp_date' : { $gte: ?0, $lte: ?1 } }")
    List<Drug> findByExp_dateBetween(LocalDate startDate, LocalDate endDate);
}