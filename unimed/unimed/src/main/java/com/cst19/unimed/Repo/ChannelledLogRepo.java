package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.ChannelledLog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChannelledLogRepo extends MongoRepository<ChannelledLog, String> {

    long countByDate(String date);

    // Custom query to fetch diagnoses for today's records
    @Query(value = "{ 'date' : ?0 }", fields = "{ 'diagnoses' : 1 }")
    List<ChannelledLog> findDiagnosesByDate(String date);
}
