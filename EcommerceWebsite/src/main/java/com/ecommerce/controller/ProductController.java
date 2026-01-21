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
import com.ecommerce.entity.Product;
import com.ecommerce.service.ProductService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	@PostMapping("/addproduct")
	ResponseEntity<Product> addproduct(@RequestBody Product product){
		return new ResponseEntity<Product>(productService.addProduct(product),HttpStatus.CREATED);
	}
	
	@GetMapping("/viewproduct")
	ResponseEntity<List<Product>> viewproduct(){
		return new ResponseEntity<List<Product>>(productService.viewProduct(),HttpStatus.CREATED);
	}

}
