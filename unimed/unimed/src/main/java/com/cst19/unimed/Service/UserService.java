package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.User;
import com.cst19.unimed.Entity.UserBio;
import com.cst19.unimed.Repo.UserBioRepo;
import com.cst19.unimed.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private UserBioRepo repobio;

    public void saveOrUpdate(User user) throws Exception {
        Optional<User> existingUser = Optional.ofNullable(repo.findByEmail(user.getEmail()));
        if (existingUser.isPresent()) {
            throw new Exception("Email is already in use.");
        }

        // Generate a verification token and save user (unverified state)
        String verificationToken = generateVerificationToken();
        user.setVerificationToken(verificationToken);
        user.setVerified(false);
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encryptPass = bcrypt.encode(user.getPassword());
        user.setPassword(encryptPass);
        repo.save(user);

        // Send verification email
        String verificationLink = "http://localhost:8088/api/v1/user/verify?token=" + verificationToken;
        sendVerificationEmail(user.getEmail(), verificationLink);
    }
    public void saveorupdatebyadmin(User users){
        users.setVerified(false);
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encryptPass = bcrypt.encode(users.getPassword());
        users.setPassword(encryptPass);
        repo.save(users);
    }

    public void saveorupdatebio(UserBio userBio){
        repobio.save(userBio);
    }

    public Iterable<User> listAll() {
        return this.repo.findAll();
    }

    public void deleteUser(String id) {

        repo.deleteById(id);
        repobio.deleteById(id);
    }

    public User getUserByID(String userid) {
        return repo.findById(userid).orElse(null);
    }
    public UserBio getUserBiobyID(String userid){return repobio.findById(userid).orElse(null);}

    public User getUserByUsernameAndPassword(String username, String password) {
        return repo.findByUsernameAndPassword(username, password);
    }

    public User getUserByUsername(String username) {
        return repo.findByUsername(username);
    }

    public User verifyEmail(String token) {
        User user = repo.findByVerificationToken(token);
        if (user != null) {
            user.setVerified(true);
            user.setVerificationToken(null);
            repo.save(user);
        }
        return user;
    }

    private String generateVerificationToken() {
        return UUID.randomUUID().toString();
    }

    private void sendVerificationEmail(String email, String verificationLink) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Email Verification");
        message.setText("Please verify your email by clicking on the following link: " + verificationLink);
        mailSender.send(message);
    }
    public UserBio getUserByNic(String nic) {
        return repobio.findByNic(nic);
    }
}
