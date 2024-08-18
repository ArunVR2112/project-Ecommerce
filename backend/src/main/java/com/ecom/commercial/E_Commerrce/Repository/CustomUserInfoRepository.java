package com.ecom.commercial.E_Commerrce.Repository;

import com.ecom.commercial.E_Commerrce.Model.UserInfo;

public interface CustomUserInfoRepository {
	UserInfo getUser(String email, String password);
}
