package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.User;
import com.cst19.unimed.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/save")
    private ResponseEntity<String> registerUser(@RequestBody User user) {
        try {
            userService.saveOrUpdate(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully. Please check your email to verify your account.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping(value = "/getAll")
    private Iterable<User> getUser() {
        return userService.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private ResponseEntity<?> update(@RequestBody User user, @PathVariable(name = "id") String id) {
        try {
            user.setId(id);
            userService.saveOrUpdate(user);
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    private void deleteUser(@PathVariable("id") String id) {
        userService.deleteUser(id);
    }

    @RequestMapping("/user/{id}")
    private User getUser(@PathVariable(name = "id") String userId) {
        return userService.getUserByID(userId);
    }

    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody User loginUser) {
        User user = userService.getUserByUsernameAndPassword(loginUser.getUsername(), loginUser.getPassword());
        if (user != null && user.isVerified()) {
            return ResponseEntity.ok(user);
        } else if (user != null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email not verified.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @GetMapping("/verify")
    public RedirectView verifyEmail(@RequestParam("token") String token, RedirectAttributes redirectAttributes) {
        User user = userService.verifyEmail(token);
        RedirectView redirectView = new RedirectView();
        if (user != null && user.isVerified()) {
            // Redirect to login page if verification is successful
            redirectAttributes.addFlashAttribute("message", "Email verification successful. You can now log in.");
            redirectView.setUrl("http://localhost:3000/loginUser");
        } else {
            // Handle the case where verification fails
            redirectAttributes.addFlashAttribute("error", "Invalid or expired verification token.");
            redirectView.setUrl("/errorPage"); // Redirect to an error page
        }
        redirectView.setStatusCode(HttpStatus.FOUND);
        return redirectView;
    }
}
