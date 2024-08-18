package com.ecom.commercial.E_Commerrce.Services.Implements;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.commercial.E_Commerrce.Model.Admin;
import com.ecom.commercial.E_Commerrce.Model.UserInfo;
import com.ecom.commercial.E_Commerrce.Repository.AdminRepository;
import com.ecom.commercial.E_Commerrce.Repository.UserRepository;
import com.ecom.commercial.E_Commerrce.Services.AdminServices;

@Service
public class AdminServiceImple implements AdminServices{
	
	
	@Autowired
	private AdminRepository adminRepository;
	

	
	@Autowired
	private UserRepository userepository;

	@Override
	public boolean createAdmin(Admin admindto) {
		boolean isValid=true;		
		admindto= adminRepository.save(admindto);
		return isValid;
	}

	@Override
	public Admin getAdmin(Admin admin) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<UserInfo> getAllUSerInfo() {
		List<UserInfo> users=userepository.findAll();
		return users;
	}

}
