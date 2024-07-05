package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.BookingSlot;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BookingRepo extends MongoRepository<BookingSlot, String> {

}
