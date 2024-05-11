package com.cst19.unimed.Controller;


import com.cst19.unimed.Entity.User;
import com.cst19.unimed.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/user")



public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/save")
    private String registerUser(@RequestBody User users){

        userService.saveorupdate(users);
        return users.get_id();
    }
    @GetMapping(value = "/getAll")
    private Iterable<User>getUser(){

        return userService.listAll();
    }
    @PutMapping(value = "/edit/{id}")
    private User update(@RequestBody User user, @PathVariable(name = "id")String _id){
        user.set_id(_id);
        userService.saveorupdate(user);
        return user;
    }
    @DeleteMapping("/delete/{id}")
    private void deleteUser(@PathVariable("id") String _id)
    {
        userService.deleteUser(_id);
    }

    @RequestMapping("/user/{id}")
    private User getUser(@PathVariable(name = "id")String userid){
        return userService.getUserbyID(userid);
    }

    @PostMapping("/login")
    private ResponseEntity<?> login(@RequestBody User loginUser) {
        User user = userService.getUserByUsernameAndPassword(loginUser.getUsername(), loginUser.getPassword());
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }


}
