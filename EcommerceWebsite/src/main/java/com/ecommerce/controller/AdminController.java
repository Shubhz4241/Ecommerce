package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entity.Admin;
import com.ecommerce.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {
	
	@Autowired
	AdminService adminService;

	@PostMapping("/register")
	ResponseEntity<Admin> register(@RequestBody Admin admin){
		return new ResponseEntity<Admin>(adminService.register(admin),HttpStatus.CREATED);
	}
	
	@PostMapping("/login")
	ResponseEntity<Admin> login(@RequestBody Admin admin){
	
		Admin admindata = adminService.findByEmail(admin.getEmail());
		if(admindata!=null) {
			return new ResponseEntity<Admin>(admindata,HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/viewadmin")
	ResponseEntity<List<Admin>> getadmin(){
		return new ResponseEntity<List<Admin>>(adminService.viewAdmin(),HttpStatus.OK);
	}
}	
