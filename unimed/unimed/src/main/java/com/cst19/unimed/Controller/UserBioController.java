package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.UserBio;
import com.cst19.unimed.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/userbio")
public class UserBioController {

    @Autowired
    private UserService userService;

    // This endpoint handles saving or updating user bio
    @PostMapping(value = "/save")
    private ResponseEntity<String> registerUserBio(@RequestBody UserBio userBio) {
        try {
            userService.saveorupdatebio(userBio);
            return ResponseEntity.status(HttpStatus.CREATED).body("User Bio registered successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // This endpoint retrieves user bio by ID
    @GetMapping(value = "/{id}")
    private ResponseEntity<?> getUserBioById(@PathVariable String id) {
        UserBio userBio = userService.getUserBiobyID(id);
        if (userBio != null) {
            return ResponseEntity.ok(userBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Bio not found");
        }
    }

    // This endpoint retrieves user bio by username (assuming username is unique and mapped to user bio)
    @GetMapping(value = "/username/{username}")
    private ResponseEntity<?> getUserBioByUsername(@PathVariable String username) {
        UserBio userBio = userService.getUserBioByUsername(username);
        if (userBio != null) {
            return ResponseEntity.ok(userBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Bio not found");
        }
    }

    // This endpoint updates user bio by ID
    @PutMapping(value = "/{id}")
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

    // This endpoint deletes user bio by ID
    @DeleteMapping(value = "/{id}")
    private ResponseEntity<?> deleteUserBioById(@PathVariable String id) {
        try {
            userService.deleteUserBio(id);
            return ResponseEntity.ok("User Bio deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    // This endpoint checks if a NIC exists in user bio records
    @GetMapping("/checkNic/{nic}")
    public ResponseEntity<?> checkNic(@PathVariable String nic) {
        UserBio userBio = userService.getUserByNic(nic);
        if (userBio != null) {
            return ResponseEntity.ok(userBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User Bio not found");
        }
    }
}
