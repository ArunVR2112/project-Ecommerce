package com.ecom.commercial.E_Commerrce.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecom.commercial.E_Commerrce.Model.Address;



public interface AddressRepository extends JpaRepository<Address,Long>{
	
	
		@Query("select c from Address c where c.userInfo.userinfoid = :userId")
	    List<Address> findByUserId(@Param("userId") Long userId);
	}
