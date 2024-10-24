package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.BlogNews;
import com.cst19.unimed.Service.BlogNewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/Blog")
public class BlogNewsController {

    @Autowired
    private BlogNewsService blogNewsService;

    // Create or update a blog news entry
    @PostMapping
    public ResponseEntity<BlogNews> createOrUpdateBlogNews(@RequestBody BlogNews blogNews) {
        BlogNews savedBlogNews = blogNewsService.saveOrUpdateBlogNews(blogNews);
        return new ResponseEntity<>(savedBlogNews, HttpStatus.CREATED);
    }

    // Get a blog news entry by ID
    @GetMapping("/{id}")
    public ResponseEntity<BlogNews> getBlogNewsById(@PathVariable String id) {
        Optional<BlogNews> blogNews = blogNewsService.getBlogNewsById(id);
        return blogNews.map(ResponseEntity::ok)
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Get all blog news entries
    @GetMapping
    public ResponseEntity<List<BlogNews>> getAllBlogNews() {
        List<BlogNews> blogNewsList = blogNewsService.getAllBlogNews();
        return new ResponseEntity<>(blogNewsList, HttpStatus.OK);
    }

    // Get the latest blog news entries
    @GetMapping("/latest")
    public ResponseEntity<List<BlogNews>> getLatestBlogNews() {
        List<BlogNews> latestBlogNews = blogNewsService.getLatestBlogNews();
        return new ResponseEntity<>(latestBlogNews, HttpStatus.OK);
    }

    // Delete a blog news entry by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBlogNewsById(@PathVariable String id) {
        blogNewsService.deleteBlogNewsById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
