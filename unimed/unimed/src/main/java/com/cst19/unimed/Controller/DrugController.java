package com.cst19.unimed.Controller;

import com.cst19.unimed.Entity.Drug;
import com.cst19.unimed.Service.DrugServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/drug")

public class DrugController {
    @Autowired
    private DrugServices drugService;

    @PostMapping(value = "/save")
    private String registerDrug(@RequestBody Drug drugs){
        drugService.saveOrUpdate(drugs);
        return drugs.get_id();
    }

    @GetMapping(value = "/getAll")
    private Iterable<Drug>getDrugs(){
        return drugService.listAll();
    }

    @PutMapping(value = "/edit/{id}")
    private Drug update(@RequestBody Drug drug, @PathVariable(name = "id")String _id){
        drug.set_id(_id);
        drugService.saveOrUpdate(drug);
        return drug;
    }

    @DeleteMapping("/delete/{id}")
    private void deleteDrug(@PathVariable(name = "id")String _id){drugService.deleteDrug(_id); }

    @RequestMapping
    private Drug getDrug(@PathVariable(name = "id")String drugid){ return drugService.getDrugByID(drugid);}
}
