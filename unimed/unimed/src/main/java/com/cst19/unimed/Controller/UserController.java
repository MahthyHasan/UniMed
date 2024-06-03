package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.User;
import com.cst19.unimed.Entity.UserBio;
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

    @PostMapping(value = "/savebyadmin")
    private ResponseEntity<?> registerUserbyAdmin(@RequestBody User users){
        userService.saveorupdatebyadmin(users);
        UserBio userBio = new UserBio();
        userBio.set_id(users.getId());
        userService.saveorupdatebio(userBio);

        return ResponseEntity.ok("User and User Bio Registered Sucessfully");

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
    @PostMapping(value = "/save/bio")
    private String registerUserBio(@RequestBody UserBio userBio) {
        userService.saveorupdatebio(userBio);
        return userBio.get_id();
    }
    @GetMapping(value = "/{id}")
    private ResponseEntity<?> getUserById(@PathVariable String id) {
        User user = userService.getUserByID(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }
    @GetMapping(value = "/bio/{id}")
    private ResponseEntity<?> getUserBioById(@PathVariable String id) {
        UserBio userBio = userService.getUserBiobyID(id);
        if (userBio != null) {
            return ResponseEntity.ok(userBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Bio not found");
        }
    }

    @PutMapping(value = "/{id}")
    private ResponseEntity<?> updateUser(@PathVariable String id, @RequestBody User userDetails) {
        try {
            User existingUser = userService.getUserByID(id);
            if (existingUser != null) {
                existingUser.setFirstName(userDetails.getFirstName() != null ? userDetails.getFirstName() : existingUser.getFirstName());
                existingUser.setLastName(userDetails.getLastName() != null ? userDetails.getLastName() : existingUser.getLastName());
                existingUser.setEmail(userDetails.getEmail() != null ? userDetails.getEmail() : existingUser.getEmail());
                existingUser.setUsername(userDetails.getUsername() != null ? userDetails.getUsername() : existingUser.getUsername());
                existingUser.setPassword(userDetails.getPassword() != null ? userDetails.getPassword() : existingUser.getPassword());
                userService.saveOrUpdate(existingUser);
                return ResponseEntity.ok(existingUser);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @PutMapping(value = "/bio/{id}")
    private ResponseEntity<?> updateUserBio(@PathVariable String id, @RequestBody UserBio userBioDetails) {
        try {
            UserBio existingUserBio = userService.getUserBiobyID(id);
            if (existingUserBio != null) {
                existingUserBio.setNic(userBioDetails.getNic() != null ? userBioDetails.getNic() : existingUserBio.getNic());
                existingUserBio.setAge(userBioDetails.getAge() != 0 ? userBioDetails.getAge() : existingUserBio.getAge());
                existingUserBio.setGender(userBioDetails.getGender() != null ? userBioDetails.getGender() : existingUserBio.getGender());
                existingUserBio.setHeight(userBioDetails.getHeight() != 0 ? userBioDetails.getHeight() : existingUserBio.getHeight());
                existingUserBio.setWeight(userBioDetails.getWeight() != 0 ? userBioDetails.getWeight() : existingUserBio.getWeight());
                existingUserBio.setBloodGroup(userBioDetails.getBloodGroup() != null ? userBioDetails.getBloodGroup() : existingUserBio.getBloodGroup());
                existingUserBio.setAllergies(userBioDetails.getAllergies() != null ? userBioDetails.getAllergies() : existingUserBio.getAllergies());
                existingUserBio.setPhoneNo(userBioDetails.getPhoneNo() != null ? userBioDetails.getPhoneNo() : existingUserBio.getPhoneNo());
                userService.saveorupdatebio(existingUserBio);
                return ResponseEntity.ok(existingUserBio);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Bio not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @DeleteMapping(value = "/{id}")
    private ResponseEntity<?> deleteUserById(@PathVariable String id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok("User and associated bio deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
