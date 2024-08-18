package com.ecom.commercial.E_Commerrce.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.commercial.E_Commerrce.CustomException.ResourceNotFoundExecption;
import com.ecom.commercial.E_Commerrce.Model.Order;
import com.ecom.commercial.E_Commerrce.Model.UserInfo;
import com.ecom.commercial.E_Commerrce.Model.Address;
import com.ecom.commercial.E_Commerrce.Services.AddressServices;
import com.ecom.commercial.E_Commerrce.Services.OrderServices;
import com.ecom.commercial.E_Commerrce.Services.UserServiceClass;


@RestController
public class OrderController {

    @Autowired
    private OrderServices orderServices;

    @Autowired
    private UserServiceClass userInfoService;

    @Autowired
    private AddressServices addressService;

    @PostMapping("/api/v1/user/order/placed/")
    public ResponseEntity<Order> placeOrder(@RequestBody Order order) {
       
    
        UserInfo userInfo = userInfoService.getUserInfoById(order.getUserInfo().getUserinfoid())
                .orElseThrow(() -> new ResourceNotFoundExecption("UserInfo", "id", order.getUserInfo().getUserinfoid()));

        
        Address address = addressService.getAddressById(order.getAddress().getId())
                .orElseThrow(() -> new ResourceNotFoundExecption("Address", "id", order.getAddress().getId()));

       
        Order ordersaved;
        try {
        	if(userInfo.getUserinfoid()==address.getUserInfo().getUserinfoid()) {
        		ordersaved = orderServices.placeOrder(order);
            }else {
            	throw new ResourceNotFoundExecption("id' not matching with each other", "userid not mathinng", null);
            }
        } catch (Exception e) {
            throw new ResourceNotFoundExecption("Order", "details", e.getMessage());
        }

        return new ResponseEntity<>(ordersaved, HttpStatus.CREATED);
    }
    
    
    
    
}
