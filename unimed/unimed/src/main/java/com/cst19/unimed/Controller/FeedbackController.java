package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Feedback;
import com.cst19.unimed.Repo.FeedbackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController {
@Autowired
    FeedbackRepo feedbackRepo;

    @PostMapping("/addFeedback")
    public void addFeedback(@RequestBody Feedback feedback){
        feedbackRepo.save(feedback);

    }
}
