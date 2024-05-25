package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Admin;
import com.cst19.unimed.Service.AdminServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/admin")

public class AdminController {
    @Autowired
    private AdminServices adminServices;

    @PostMapping(value = "/save")
    private String registerAdmin(@RequestBody Admin admins){
        adminServices.saveorupdate(admins);
        return admins.get_id();
    }

    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody Admin loginAdmin){
        Admin admin = adminServices.getUserByUsernameAndPassword(loginAdmin.getUsername(), loginAdmin.getPassword());
        if (admin != null) {
            return ResponseEntity.ok(admin);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}
