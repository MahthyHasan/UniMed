package com.cst19.unimed.Service;
import com.cst19.unimed.Entity.BlogNews;
import com.cst19.unimed.Repo.BlogNewsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

@Service
public class BlogNewsService {

    @Autowired
    private BlogNewsRepo blogNewsRepo;


    public BlogNews saveOrUpdateBlogNews(BlogNews blogNews) {
        return blogNewsRepo.save(blogNews);
    }


    public Optional<BlogNews> getBlogNewsById(String id) {
        return blogNewsRepo.findById(id);
    }


    public List<BlogNews> getAllBlogNews() {
        return blogNewsRepo.findAll();
    }


    public void deleteBlogNewsById(String id) {
        blogNewsRepo.deleteById(id);
    }


    public List<BlogNews> getLatestBlogNews() {
        Sort sort = Sort.by(Sort.Order.desc("date"), Sort.Order.desc("time"));
        return blogNewsRepo.findAll(sort);
    }
}
