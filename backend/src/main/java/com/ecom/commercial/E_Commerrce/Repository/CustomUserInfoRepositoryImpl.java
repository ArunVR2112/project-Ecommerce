package com.ecom.commercial.E_Commerrce.Repository;

import com.ecom.commercial.E_Commerrce.Model.UserInfo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

public class CustomUserInfoRepositoryImpl implements CustomUserInfoRepository{
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	@Transactional
	public UserInfo getUser(String email, String password) {
		Query query = entityManager.createQuery("from UserInfo where email = :email");
		System.out.println(email);
		System.out.println(query);
		query.setParameter("email", email);
		// TODO Auto-generated method stub
		    try {
	        UserInfo user = (UserInfo) query.getSingleResult();
	        if (password.equals(user.getPassword())) { 
	            return user;
	        } else {
	            return new UserInfo();
	        }
	    } catch (Exception e) {
	        System.out.println(e.getMessage());
	        return new UserInfo();
	    }
	}
	

}
