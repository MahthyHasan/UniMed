package com.cst19.unimed.Service;


import com.cst19.unimed.Entity.Drug;
import com.cst19.unimed.Repo.DrugRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DrugServices {

    @Autowired
    private DrugRepo repo;
    public void saveorupdate(Drug drugs){
        repo.save(drugs);
    }
    public Iterable<Drug> listAll(){return this.repo.findAll();}
    public void deleteDrug(String id){repo.deleteById(id);}
    public Drug getDrugByID(String drugid){return repo.findById(drugid).get();}
}
