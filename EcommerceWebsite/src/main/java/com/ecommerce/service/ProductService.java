package com.ecommerce.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecommerce.entity.Product;

@Service
public interface ProductService {

	Product addProduct(Product product);
	List<Product> viewProduct();
	
}
