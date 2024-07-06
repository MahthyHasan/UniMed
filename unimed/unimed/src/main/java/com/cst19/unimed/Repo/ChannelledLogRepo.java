package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.ChannelledLog;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ChannelledLogRepo extends MongoRepository<ChannelledLog, String> {

}
