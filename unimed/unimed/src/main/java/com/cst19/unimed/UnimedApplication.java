package com.cst19.unimed;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
//@EnableScheduling
public class UnimedApplication {

	public static void main(String[] args) {
		SpringApplication.run(UnimedApplication.class, args);
	}

}
