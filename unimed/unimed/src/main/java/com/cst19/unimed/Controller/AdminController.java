package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Admin;
import com.cst19.unimed.Entity.AdminBio;
import com.cst19.unimed.Service.AdminServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/admin")
public class AdminController {
    @Autowired
    private AdminServices adminServices;

    private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

    @PostMapping(value = "/save")
    private ResponseEntity<?> registerAdmin(@RequestBody Admin admins) {
        adminServices.saveorupdate(admins);
        AdminBio adminBio = new AdminBio();
        adminBio.set_id(admins.get_id());
        adminServices.saveorupdatebio(adminBio);
        return ResponseEntity.ok("Admin and AdminBio registered successfully.");
    }

    @PostMapping(value = "/save/bio")
    private String registerAdminBio(@RequestBody AdminBio adminBio) {
        adminServices.saveorupdatebio(adminBio);
        return adminBio.get_id();
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<?> getAdminById(@PathVariable String id) {
        Admin admin = adminServices.getUserbyID(id);
        if (admin != null) {
            return ResponseEntity.ok(admin);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin not found");
        }
    }

    @GetMapping(value = "/bio/{id}")
    private ResponseEntity<?> getAdminBioById(@PathVariable String id) {
        AdminBio adminBio = adminServices.getUserBiobyID(id);
        if (adminBio != null) {
            return ResponseEntity.ok(adminBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin Bio not found");
        }
    }

    @PutMapping(value = "/{id}")
    private ResponseEntity<?> updateAdmin(@PathVariable String id, @RequestBody Admin adminDetails) {
        Admin existingAdmin = adminServices.getUserbyID(id);
        if (existingAdmin != null) {
            existingAdmin.setFirst_name(adminDetails.getFirst_name() != null ? adminDetails.getFirst_name() : existingAdmin.getFirst_name());
            existingAdmin.setLast_name(adminDetails.getLast_name() != null ? adminDetails.getLast_name() : existingAdmin.getLast_name());
            existingAdmin.setEmail(adminDetails.getEmail() != null ? adminDetails.getEmail() : existingAdmin.getEmail());
            existingAdmin.setUsername(adminDetails.getUsername() != null ? adminDetails.getUsername() : existingAdmin.getUsername());
            existingAdmin.setPassword(adminDetails.getPassword() != null ? adminDetails.getPassword() : existingAdmin.getPassword());
            adminServices.saveorupdate(existingAdmin);
            return ResponseEntity.ok(existingAdmin);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin not found");
        }
    }

    @PutMapping(value = "/bio/{id}")
    private ResponseEntity<?> updateAdminBio(@PathVariable String id, @RequestBody AdminBio adminBioDetails) {
        AdminBio existingAdminBio = adminServices.getUserBiobyID(id);
        if (existingAdminBio != null) {
            existingAdminBio.setNic(adminBioDetails.getNic() != null ? adminBioDetails.getNic() : existingAdminBio.getNic());
            existingAdminBio.setAge(adminBioDetails.getAge() != 0 ? adminBioDetails.getAge() : existingAdminBio.getAge());
            existingAdminBio.setGender(adminBioDetails.getGender() != null ? adminBioDetails.getGender() : existingAdminBio.getGender());
            existingAdminBio.setHeight(adminBioDetails.getHeight() != 0 ? adminBioDetails.getHeight() : existingAdminBio.getHeight());
            existingAdminBio.setWeight(adminBioDetails.getWeight() != 0 ? adminBioDetails.getWeight() : existingAdminBio.getWeight());
            existingAdminBio.setBloodGroup(adminBioDetails.getBloodGroup() != null ? adminBioDetails.getBloodGroup() : existingAdminBio.getBloodGroup());
            existingAdminBio.setAllergies(adminBioDetails.getAllergies() != null ? adminBioDetails.getAllergies() : existingAdminBio.getAllergies());
            existingAdminBio.setPhoneNo(adminBioDetails.getPhoneNo() != null ? adminBioDetails.getPhoneNo() : existingAdminBio.getPhoneNo());
            adminServices.saveorupdatebio(existingAdminBio);
            return ResponseEntity.ok(existingAdminBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Admin Bio not found");
        }
    }

    @DeleteMapping(value = "/{id}")
    private ResponseEntity<?> deleteAdminById(@PathVariable String id) {
        adminServices.deleteAdminByID(id);
        return ResponseEntity.ok("Admin and associated bio deleted successfully");
    }

    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody Admin loginAdmin) {

        Admin admin = adminServices.getUserByUserName(loginAdmin.getUsername());

        if(admin != null && bcrypt.matches(loginAdmin.getPassword(), admin.getPassword())) {
            return ResponseEntity.ok(admin);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @GetMapping(value = "/getAll")
    private Iterable<Admin> getAdmin() {
        return adminServices.listAll();
    }
}
