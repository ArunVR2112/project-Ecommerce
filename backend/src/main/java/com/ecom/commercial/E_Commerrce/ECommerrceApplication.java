package com.ecom.commercial.E_Commerrce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
public class ECommerrceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ECommerrceApplication.class, args);
	}

}
