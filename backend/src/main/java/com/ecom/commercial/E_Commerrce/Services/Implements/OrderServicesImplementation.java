package com.ecom.commercial.E_Commerrce.Services.Implements;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.commercial.E_Commerrce.Model.Order;
import com.ecom.commercial.E_Commerrce.Repository.OrderRepo;
import com.ecom.commercial.E_Commerrce.Services.OrderServices;

@Service
public class OrderServicesImplementation implements OrderServices{
	
	
	
	@Autowired
	private OrderRepo orderRepo;

	@Override
	public Order placeOrder(Order order) {
		// TODO Auto-generated method stub
		Order orderPlaced=orderRepo.save(order);
		
		return orderPlaced;
	}

	@Override
	public List<Order> getAllOrders() {
		
		return orderRepo.findAll();
	}

}
