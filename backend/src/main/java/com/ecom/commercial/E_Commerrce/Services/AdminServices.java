package com.ecom.commercial.E_Commerrce.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecom.commercial.E_Commerrce.Model.Admin;
import com.ecom.commercial.E_Commerrce.Model.UserInfo;

@Service
public interface AdminServices {

//	Save Admin Data in db
	boolean createAdmin(Admin admin);
	
	
//	get admin data from db
	
	Admin getAdmin(Admin admin);
	
	
//	get all Customers
	
	List<UserInfo> getAllUSerInfo();


	
//	update admin
	
	
//Delete Admin permantly
	
	
//	assign task to lower admins
	
	
	
}
