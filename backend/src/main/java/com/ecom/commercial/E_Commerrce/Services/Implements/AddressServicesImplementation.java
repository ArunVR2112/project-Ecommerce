package com.ecom.commercial.E_Commerrce.Services.Implements;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.commercial.E_Commerrce.Model.Address;
import com.ecom.commercial.E_Commerrce.Repository.AddressRepository;
import com.ecom.commercial.E_Commerrce.Services.AddressServices;

@Service
public class AddressServicesImplementation implements AddressServices {
	
	@Autowired
	private AddressRepository addressRepository;
	
	
	public AddressServicesImplementation(AddressRepository addressRepository) {
		// TODO Auto-generated constructor stub
		this.addressRepository=addressRepository;
	}
	
	
//	Save Address of the users
	@Override
	public Address saveAdd(Address address) {
		// TODO Auto-generated method stub	
		return addressRepository.save(address);	
	}

	@Override
	public List<Address> getAllAddressOfUser(Long id) {
		
		List<Address> allAddresses =addressRepository.findByUserId(id);
		
		return allAddresses;
	}

	@Override
	public Address updateAddress(Long addid) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Optional<Address> getAddressById(long id) {
        return addressRepository.findById(id);
    }
	@Override
	public void deleteAddress(Long userid, Long addId) {
	    addressRepository.deleteById(addId); // Directly delete by ID if addId is correct
	}

}
