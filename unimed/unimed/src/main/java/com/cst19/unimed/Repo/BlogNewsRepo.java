package com.cst19.unimed.Repo;

import com.cst19.unimed.Entity.BlogNews;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface BlogNewsRepo extends MongoRepository <BlogNews, String> {

    List<BlogNews> findAll(Sort sort);
}
