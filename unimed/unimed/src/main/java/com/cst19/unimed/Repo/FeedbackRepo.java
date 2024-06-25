package com.cst19.unimed.Repo;


import com.cst19.unimed.Entity.Feedback;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FeedbackRepo extends MongoRepository<Feedback,String> {
}
