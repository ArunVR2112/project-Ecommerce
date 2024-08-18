package com.ecom.commercial.E_Commerrce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecom.commercial.E_Commerrce.Model.Order;

public interface OrderRepo extends JpaRepository<Order, Long>{

}
