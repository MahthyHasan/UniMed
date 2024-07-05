package com.cst19.unimed.Service;

import com.cst19.unimed.Entity.User;
import com.cst19.unimed.Entity.UserBio;
import com.cst19.unimed.Repo.UserBioRepo;
import com.cst19.unimed.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
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

    // Method to save or update a user
    public void saveOrUpdate(User user) throws Exception {
        Optional<User> existingUser = Optional.ofNullable(repo.findByEmail(user.getEmail()));
        if (existingUser.isPresent()) {
            throw new Exception("Email is already in use.");
        }

        // Generate a verification token and save user (unverified state)
        String verificationToken = generateVerificationToken();
        user.setVerificationToken(verificationToken);
        user.setVerified(false);
        repo.save(user);

        // Send verification email
        String verificationLink = "http://localhost:8088/api/v1/user/verify?token=" + verificationToken;
        sendVerificationEmail(user.getEmail(), verificationLink);
    }

    // Method to save or update user by admin
    public void saveOrUpdateByAdmin(User user) {
        repo.save(user);
    }

    // Method to save or update user bio
    public void saveOrUpdateBio(UserBio userBio) {
        repobio.save(userBio);
    }

    // Method to list all users
    public Iterable<User> listAllUsers() {
        return repo.findAll();
    }

    // Method to delete a user and associated user bio
    public void deleteUser(String id) {
        repo.deleteById(id);
        repobio.deleteById(id);
    }

    // Method to get a user by ID
    public User getUserByID(String userId) {
        return repo.findById(userId).orElse(null);
    }

    // Method to get user bio by ID
    public UserBio getUserBioByID(String userId) {
        return repobio.findById(userId).orElse(null);
    }

    // Method to authenticate user by username and password
    public User authenticateUser(String username, String password) {
        return repo.findByUsernameAndPassword(username, password);
    }

    // Method to verify user's email by token
    public User verifyEmail(String token) {
        User user = repo.findByVerificationToken(token);
        if (user != null) {
            user.setVerified(true);
            user.setVerificationToken(null);
            repo.save(user);
        }
        return user;
    }

    // Method to generate a verification token
    private String generateVerificationToken() {
        return UUID.randomUUID().toString();
    }

    // Method to send verification email
    private void sendVerificationEmail(String email, String verificationLink) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Email Verification");
        message.setText("Please verify your email by clicking on the following link: " + verificationLink);
        mailSender.send(message);
    }

    // Method to get user bio by NIC
    public UserBio getUserByNic(String nic) {
        return repobio.findByNic(nic);
    }

    // Method to get user bio by username
    public UserBio getUserBioByUsername(String username) {
        User user = repo.findByUsername(username);
        if (user != null) {
            return repobio.findById(user.getId()).orElse(null);
        }
        return null;
    }

    // Method to delete user bio by ID
    public void deleteUserBio(String id) {
        repobio.deleteById(id);
    }
}
