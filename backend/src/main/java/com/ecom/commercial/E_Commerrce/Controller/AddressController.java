package com.ecom.commercial.E_Commerrce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.commercial.E_Commerrce.Model.Address;
import com.ecom.commercial.E_Commerrce.Services.AddressServices;



@RestController
public class AddressController {
	
	@Autowired
	private AddressServices addressServices;
	
	@PostMapping("/api/address")
	public ResponseEntity<Address> saveAddress(@RequestBody Address address){
		Address savedAddress= addressServices.saveAdd(address);
		return new ResponseEntity<Address>(savedAddress,HttpStatus.OK);
	}
	

    @GetMapping("/address/items/{userId}")
    public ResponseEntity<List<Address>> getAllCartItems(@PathVariable Long userId) {
        List<Address> cartItems = addressServices.getAllAddressOfUser(userId);

        return ResponseEntity.ok(cartItems);
    }
    
    @DeleteMapping("/api/address/del/{userid}/{addid}")
    public String deleteAddress(@PathVariable Long userid, @PathVariable Long addid){
    	
    	addressServices.deleteAddress(userid, addid);
    	return "Deleted The Address";
    }
	
}
