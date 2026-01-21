package com.ecommerce.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecommerce.entity.Admin;

@Service
public interface AdminService {

	Admin register(Admin admin);
	Admin login(Admin admin);
	Admin findByEmail(String email);
	List<Admin> viewAdmin();
	
}
