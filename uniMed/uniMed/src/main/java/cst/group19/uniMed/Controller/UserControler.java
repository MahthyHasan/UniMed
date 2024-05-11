package cst.group19.uniMed.Controller;

import cst.group19.uniMed.Entitiy.User;
import cst.group19.uniMed.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/user")

public class UserControler {

    @Autowired
    private UserService userService;

    @PostMapping(value = "/save")
    public String registerUser(@RequestBody User users){

        userService.saveorupdate(users);
        return users.id;
    }

    @GetMapping(value = "/getAll")
    private Iterable<User>getUser(){

        return userService.listAll();
    }
    @PutMapping(value = "/edit/{id}")
    private User update(@RequestBody User user, @PathVariable(name = "id")String id){
        user.setId(id);
        userService.saveorupdate(user);
        return user;
    }

    @DeleteMapping("/delete/{id}")
    private void deleteUser(@PathVariable("id") String id)
    {
        userService.deleteUser(id);
    }

    @RequestMapping("/user/{id}")
    private User getUser(@PathVariable(name = "id")String userid){
        return userService.getUserbyID(userid);
    }

}
