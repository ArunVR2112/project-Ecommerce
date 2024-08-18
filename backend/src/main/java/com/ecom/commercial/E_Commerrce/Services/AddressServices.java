package com.ecom.commercial.E_Commerrce.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ecom.commercial.E_Commerrce.Model.Address;


@Service
public interface AddressServices {
	
	
	Address saveAdd(Address address);
	
	List<Address> getAllAddressOfUser(Long id);
	
	Address updateAddress(Long addid);
	
	void deleteAddress(Long userid,Long addId);

	Optional<Address> getAddressById(long id);
}
