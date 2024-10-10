package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.Drug;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlertService {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    public void sendExpirationAlerts(List<Drug> expiringDrugs) {
        for (Drug drug : expiringDrugs) {
            messagingTemplate.convertAndSend("/topic/alerts", "Alert: Drug " + drug.getDrug_name() + " is expiring soon!");
        }
    }
}
