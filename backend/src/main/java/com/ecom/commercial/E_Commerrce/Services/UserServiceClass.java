package com.ecom.commercial.E_Commerrce.Services;

import java.util.Optional;

import com.ecom.commercial.E_Commerrce.Model.UserInfo;

public interface UserServiceClass {
	
	UserInfo saveUsers(UserInfo userInfo);
	UserInfo checkLogin(String email, String password);
	
	UserInfo getUser(long id);
	

	Optional<UserInfo> getUserInfoById(long id);
	
	UserInfo updateUserInfo(UserInfo userInfo);

}
