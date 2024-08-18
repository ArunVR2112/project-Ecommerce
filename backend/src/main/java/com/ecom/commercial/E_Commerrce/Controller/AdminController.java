package com.ecom.commercial.E_Commerrce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.commercial.E_Commerrce.Model.Admin;
import com.ecom.commercial.E_Commerrce.Model.Order;
import com.ecom.commercial.E_Commerrce.Model.UserInfo;
import com.ecom.commercial.E_Commerrce.Repository.OrderRepo;
import com.ecom.commercial.E_Commerrce.Services.AdminServices;
import com.ecom.commercial.E_Commerrce.Services.OrderServices;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

	
	@Autowired
	private AdminServices adminServices;
	

	@Autowired
	private OrderServices orderServices;
	
	@PostMapping("/addAdmin")
	public String saveAdmin(@RequestBody Admin admin ) {
		
		
		boolean valid= adminServices.createAdmin(admin);
		if (valid) {
			return "admin added";
		}
		return "admin not successful";
	}
	
	
	@GetMapping("/api/all/orders")
	public List<Order> getAllOrders(){
		List<Order> order=orderServices.getAllOrders();
		return order;
	}
	
}
