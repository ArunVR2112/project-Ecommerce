package com.ecom.commercial.E_Commerrce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.commercial.E_Commerrce.Model.UserInfo;

public interface UserRepository extends JpaRepository<UserInfo, Long>,CustomUserInfoRepository{


}
