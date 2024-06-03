package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Pharmacist;
import com.cst19.unimed.Entity.PharmacistBio;
import com.cst19.unimed.Service.PharmasistServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/pharmacist")
public class PharmacistController {
    @Autowired
    private PharmasistServices pharmasistServices;

    @PostMapping(value = "/save")
    private ResponseEntity<?> registerPharmacist(@RequestBody Pharmacist pharmacists) {
        pharmasistServices.saveorupdate(pharmacists);
        PharmacistBio pharmacistBio = new PharmacistBio();
        pharmacistBio.set_id(pharmacists.get_id());
        pharmasistServices.saveorupdatebio(pharmacistBio);
        return ResponseEntity.ok("Pharmacist and PharmacistBio registered successfully.");
    }

    @PostMapping(value = "/save/bio")
    private String registerPharmacistBio(@RequestBody PharmacistBio pharmacistBio) {
        pharmasistServices.saveorupdatebio(pharmacistBio);
        return pharmacistBio.get_id();
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<?> getPharmacistById(@PathVariable String id) {
        Pharmacist pharmacist = pharmasistServices.getUserbyID(id);
        if (pharmacist != null) {
            return ResponseEntity.ok(pharmacist);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pharmacist not found");
        }
    }

    @GetMapping(value = "/bio/{id}")
    private ResponseEntity<?> getPharmacistBioById(@PathVariable String id) {
        PharmacistBio pharmacistBio = pharmasistServices.getUserBiobyID(id);
        if (pharmacistBio != null) {
            return ResponseEntity.ok(pharmacistBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pharmacist Bio not found");
        }
    }

    @PutMapping(value = "/{id}")
    private ResponseEntity<?> updatePharmacist(@PathVariable String id, @RequestBody Pharmacist pharmacistDetails) {
        Pharmacist existingPharmacist = pharmasistServices.getUserbyID(id);
        if (existingPharmacist != null) {
            existingPharmacist.setFirst_name(pharmacistDetails.getFirst_name() != null ? pharmacistDetails.getFirst_name() : existingPharmacist.getFirst_name());
            existingPharmacist.setLast_name(pharmacistDetails.getLast_name() != null ? pharmacistDetails.getLast_name() : existingPharmacist.getLast_name());
            existingPharmacist.setEmail(pharmacistDetails.getEmail() != null ? pharmacistDetails.getEmail() : existingPharmacist.getEmail());
            existingPharmacist.setUsername(pharmacistDetails.getUsername() != null ? pharmacistDetails.getUsername() : existingPharmacist.getUsername());
            existingPharmacist.setPassword(pharmacistDetails.getPassword() != null ? pharmacistDetails.getPassword() : existingPharmacist.getPassword());
            pharmasistServices.saveorupdate(existingPharmacist);
            return ResponseEntity.ok(existingPharmacist);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pharmacist not found");
        }
    }

    @PutMapping(value = "/bio/{id}")
    private ResponseEntity<?> updatePharmacistBio(@PathVariable String id, @RequestBody PharmacistBio pharmacistBioDetails) {
        PharmacistBio existingPharmacistBio = pharmasistServices.getUserBiobyID(id);
        if (existingPharmacistBio != null) {
            existingPharmacistBio.setNic(pharmacistBioDetails.getNic() != null ? pharmacistBioDetails.getNic() : existingPharmacistBio.getNic());
            existingPharmacistBio.setAge(pharmacistBioDetails.getAge() != 0 ? pharmacistBioDetails.getAge() : existingPharmacistBio.getAge());
            existingPharmacistBio.setGender(pharmacistBioDetails.getGender() != null ? pharmacistBioDetails.getGender() : existingPharmacistBio.getGender());
            existingPharmacistBio.setHeight(pharmacistBioDetails.getHeight() != 0 ? pharmacistBioDetails.getHeight() : existingPharmacistBio.getHeight());
            existingPharmacistBio.setWeight(pharmacistBioDetails.getWeight() != 0 ? pharmacistBioDetails.getWeight() : existingPharmacistBio.getWeight());
            existingPharmacistBio.setBloodGroup(pharmacistBioDetails.getBloodGroup() != null ? pharmacistBioDetails.getBloodGroup() : existingPharmacistBio.getBloodGroup());
            existingPharmacistBio.setAllergies(pharmacistBioDetails.getAllergies() != null ? pharmacistBioDetails.getAllergies() : existingPharmacistBio.getAllergies());
            existingPharmacistBio.setPhoneNo(pharmacistBioDetails.getPhoneNo() != null ? pharmacistBioDetails.getPhoneNo() : existingPharmacistBio.getPhoneNo());
            pharmasistServices.saveorupdatebio(existingPharmacistBio);
            return ResponseEntity.ok(existingPharmacistBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pharmacist Bio not found");
        }
    }

    @DeleteMapping(value = "/{id}")
    private ResponseEntity<?> deletePharmacistById(@PathVariable String id) {
        pharmasistServices.deletePharmacistById(id);
        return ResponseEntity.ok("Pharmacist and associated bio deleted successfully");
    }

    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody Pharmacist loginPharmacist) {
        Pharmacist pharmacist = pharmasistServices.getUserByUsernameAndPassword(loginPharmacist.getUsername(), loginPharmacist.getPassword());
        if (pharmacist != null) {
            return ResponseEntity.ok(pharmacist);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @GetMapping(value = "/getAll")
    private Iterable<Pharmacist> getPharmacist() {
        return pharmasistServices.listAll();
    }
}
