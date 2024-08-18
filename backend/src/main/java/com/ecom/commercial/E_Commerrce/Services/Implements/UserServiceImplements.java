package com.ecom.commercial.E_Commerrce.Services.Implements;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.commercial.E_Commerrce.CustomException.ResourceNotFoundExecption;
import com.ecom.commercial.E_Commerrce.Model.UserInfo;
import com.ecom.commercial.E_Commerrce.Repository.UserRepository;
import com.ecom.commercial.E_Commerrce.Services.UserServiceClass;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImplements implements UserServiceClass{
	
	@Autowired
	private UserRepository repo;

	

	
	public UserServiceImplements(UserRepository repo) {
		super();
		this.repo = repo;
	}
	
//	Save The data of user

	@Override
	public UserInfo saveUsers(UserInfo userInfo) {
		
		
		
//		add the method to convert password into endcoded or hash format and save it in table
		return repo.save(userInfo);
	}
	
	
//	Login Validation using email and [password

	@Override
	public UserInfo checkLogin(String email,String password) {
		return this.repo.getUser(email, password);
	}
	

@Transactional
	@Override
	public UserInfo getUser(long id) {
		// TODO Auto-generated method stubs
		Optional<UserInfo> userOpentional= repo.findById(id);
		if (userOpentional.isPresent()) {
			return userOpentional.get();
		} else {
			 throw new ResourceNotFoundExecption("User Not Found", "Id", id);
		}

	}
	@Transactional
	@Override
	public Optional<UserInfo> getUserInfoById(long id) {
        return repo.findById(id);
    }

	@Override
	public UserInfo updateUserInfo(UserInfo userInfo) {
		
		
		repo.save(userInfo);
		return null;
	}
}
