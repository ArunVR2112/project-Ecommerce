package com.ecom.commercial.E_Commerrce.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecom.commercial.E_Commerrce.Model.Order;

@Service
public interface OrderServices {
	
	
	Order placeOrder(Order order);
	List<Order> getAllOrders();

}
