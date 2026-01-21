package com.ecommerce.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.entity.Admin;
import com.ecommerce.repo.AdminRepo;
import com.ecommerce.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	AdminRepo adminRepo;

	@Override
	public Admin register(Admin admin) {
		return adminRepo.save(admin);
	}

	

	@Override
	public List<Admin> viewAdmin() {
		return adminRepo.findAll();
	}



	@Override
	public Admin login(Admin admin) {
		// TODO Auto-generated method stub
		return null;
	}



	@Override
	public Admin findByEmail(String email) {
		return adminRepo.findByEmail(email);
	}

}
