package com.cst19.unimed.Controller;


import com.cst19.unimed.Entity.Doctor;
import com.cst19.unimed.Entity.DoctorBio;
import com.cst19.unimed.Service.DoctorServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/doctor")


public class DoctorController {
    @Autowired
    private DoctorServices doctorService;

    @PostMapping(value = "/save")
    private String registerDoctor(@RequestBody Doctor doctors){
        doctorService.saveorupdate(doctors);
        return doctors.get_id();
    }

    @PostMapping(value = "/save/bio" )
    private String registerDoctorBio(@RequestBody DoctorBio doctorBio){
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

    @PutMapping(value = "/bio/{id}")
    private ResponseEntity<?> updateDoctorBio(@PathVariable String id, @RequestBody DoctorBio doctorBioDetails) {
        DoctorBio existingDoctorBio = doctorService.getUserBiobyID(id);
        if (existingDoctorBio != null) {
            existingDoctorBio.setNic(doctorBioDetails.getNic());
            existingDoctorBio.setAge(doctorBioDetails.getAge());
            existingDoctorBio.setGender(doctorBioDetails.getGender());
            existingDoctorBio.setHeight(doctorBioDetails.getHeight());
            existingDoctorBio.setWeight(doctorBioDetails.getWeight());
            existingDoctorBio.setBloodGroup(doctorBioDetails.getBloodGroup());
            existingDoctorBio.setAllergies(doctorBioDetails.getAllergies());

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
        Doctor doctor = doctorService.getUserByUsernameAndPassword(loginDoctor.getUsername(), loginDoctor.getPassword());
        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    @GetMapping(value = "/getAll")
    private Iterable<Doctor>getDoctor(){
        return doctorService.listAll();
    }

}
