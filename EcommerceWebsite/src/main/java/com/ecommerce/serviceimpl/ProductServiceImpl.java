package com.ecommerce.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.entity.Product;
import com.ecommerce.repo.ProductRepo;
import com.ecommerce.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	
	@Autowired
	ProductRepo productRepo;
	
	@Override
	public Product addProduct(Product product) {
		return productRepo.save(product);
	}

	@Override
	public List<Product> viewProduct() {
		return productRepo.findAll();
	}

}
