package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Doctor;
import com.cst19.unimed.Entity.DoctorBio;
import com.cst19.unimed.Service.DoctorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/doctor")
public class DoctorController {
    @Autowired
    private DoctorServices doctorService;

    private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();


    @PostMapping(value = "/save")
    private ResponseEntity<?> registerDoctor(@RequestBody Doctor doctors) {
        doctorService.saveorupdate(doctors);
        DoctorBio doctorBio = new DoctorBio();
        doctorBio.set_id(doctors.get_id());
        doctorService.saveorupdatebio(doctorBio);


        return ResponseEntity.ok("Doctor and DoctorBio registered successfully.");
    }


    @PostMapping(value = "/save/bio")
    private String registerDoctorBio(@RequestBody DoctorBio doctorBio) {
        doctorService.saveorupdatebio(doctorBio);
        return doctorBio.get_id();
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<?> getDoctorById(@PathVariable String id) {
        Doctor doctor = doctorService.getUserbyID(id);
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Doctor not found");
        }
    }

    @GetMapping(value = "/bio/{id}")
    private ResponseEntity<?> getDoctorBioById(@PathVariable String id) {
        DoctorBio doctorBio = doctorService.getUserBiobyID(id);
        if (doctorBio != null) {
            return ResponseEntity.ok(doctorBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Doctor Bio not found");
        }
    }

    @PutMapping(value = "/{id}")
    private ResponseEntity<?> updateDoctor(@PathVariable String id, @RequestBody Doctor doctorDetails) {
        Doctor existingDoctor = doctorService.getUserbyID(id);
        if (existingDoctor != null) {
            existingDoctor.setFirst_name(doctorDetails.getFirst_name() != null ? doctorDetails.getFirst_name() : existingDoctor.getFirst_name());
            existingDoctor.setLast_name(doctorDetails.getLast_name() != null ? doctorDetails.getLast_name() : existingDoctor.getLast_name());
            existingDoctor.setEmail(doctorDetails.getEmail() != null ? doctorDetails.getEmail() : existingDoctor.getEmail());
            existingDoctor.setUsername(doctorDetails.getUsername() != null ? doctorDetails.getUsername() : existingDoctor.getUsername());
            existingDoctor.setPassword(doctorDetails.getPassword() != null ? doctorDetails.getPassword() : existingDoctor.getPassword());
            doctorService.saveorupdate(existingDoctor);
            return ResponseEntity.ok(existingDoctor);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Doctor not found");
        }
    }


    @PutMapping(value = "/bio/{id}")
    private ResponseEntity<?> updateDoctorBio(@PathVariable String id, @RequestBody DoctorBio doctorBioDetails) {
        DoctorBio existingDoctorBio = doctorService.getUserBiobyID(id);
        if (existingDoctorBio != null) {
            existingDoctorBio.setNic(doctorBioDetails.getNic() != null ? doctorBioDetails.getNic() : existingDoctorBio.getNic());
            existingDoctorBio.setAge(doctorBioDetails.getAge() != 0 ? doctorBioDetails.getAge() : existingDoctorBio.getAge());
            existingDoctorBio.setGender(doctorBioDetails.getGender() != null ? doctorBioDetails.getGender() : existingDoctorBio.getGender());
            existingDoctorBio.setHeight(doctorBioDetails.getHeight() != 0 ? doctorBioDetails.getHeight() : existingDoctorBio.getHeight());
            existingDoctorBio.setWeight(doctorBioDetails.getWeight() != 0 ? doctorBioDetails.getWeight() : existingDoctorBio.getWeight());
            existingDoctorBio.setBloodGroup(doctorBioDetails.getBloodGroup() != null ? doctorBioDetails.getBloodGroup() : existingDoctorBio.getBloodGroup());
            existingDoctorBio.setAllergies(doctorBioDetails.getAllergies() != null ? doctorBioDetails.getAllergies() : existingDoctorBio.getAllergies());
            existingDoctorBio.setPhoneNo(doctorBioDetails.getPhoneNo() != null ? doctorBioDetails.getPhoneNo() : existingDoctorBio.getPhoneNo());
            doctorService.saveorupdatebio(existingDoctorBio);
            return ResponseEntity.ok(existingDoctorBio);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Doctor Bio not found");
        }
    }

    @DeleteMapping(value = "/{id}")
    private ResponseEntity<?> deleteDoctorById(@PathVariable String id) {
        doctorService.deleteDoctorById(id);
        return ResponseEntity.ok("Doctor and associated bio deleted successfully");
    }

    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody Doctor loginDoctor) {
        Doctor doctor = doctorService.getUserByUserName(loginDoctor.getUsername());

        if(doctor != null && bcrypt.matches(loginDoctor.getPassword(), doctor.getPassword())){
            return ResponseEntity.ok(doctor);
        }else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @GetMapping(value = "/getAll")
    private Iterable<Doctor> getDoctor() {
        return doctorService.listAll();
    }
}
