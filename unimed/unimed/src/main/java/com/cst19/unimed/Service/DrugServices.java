package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.Drug;
import com.cst19.unimed.Repo.DrugRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;

@Service
public class DrugServices {

    @Autowired
    private DrugRepo repo;

    @Autowired
    private AlertService alertService;

    // Save or update a drug
    public void saveOrUpdate(Drug drug) {
        repo.save(drug);
    }

    // List all drugs
    public Iterable<Drug> listAll() {
        return this.repo.findAll();
    }

    // Delete a drug by ID
    public void deleteDrug(String id) {
        repo.deleteById(id);
    }

    // Get a drug by ID
    public Drug getDrugByID(String drugId) {
        return repo.findById(drugId).orElse(null); // Handle case where drug may not be found
    }

    // Get drugs expiring soon (within the next 30 days)
    public List<Drug> getDrugsExpiringSoon() {
        LocalDate today = LocalDate.now();
        LocalDate thresholdDate = today.plusDays(30);
        return repo.findByExp_dateBetween(today, thresholdDate);
    }

    // Scheduled task to check for expiring drugs and send alerts
    @Scheduled(cron = "0 0 0 * * ?") // Runs daily at midnight
    public void checkDrugExpirations() {
        List<Drug> expiringDrugs = getDrugsExpiringSoon();
        if (!expiringDrugs.isEmpty()) {
            expiringDrugs.forEach(drug -> {
                // Replace with your alert mechanism, e.g., email, push notification
                System.out.println("Alert: Drug " + drug.getDrug_name() + " is expiring soon!");
            });
        }
    }
}
