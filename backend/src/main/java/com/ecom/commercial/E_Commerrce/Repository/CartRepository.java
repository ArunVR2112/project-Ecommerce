package com.ecom.commercial.E_Commerrce.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ecom.commercial.E_Commerrce.Model.CartItem;

public interface CartRepository extends JpaRepository<CartItem, Long> {
    
//    @Query("select c from CartItem c where c.userInfo.userinfoid = :userId")
//    List<CartItem> findByUserInfoUserInfoId(@Param("userId") Long userId);
    
    @Query("select a from CartItem a where a.cartItemId = :cartitemid and a.userInfo.userinfoid = :CurrenUserInfoId")
    CartItem findByCartItemId(@Param("cartitemid") Long cartitemid,@Param("CurrenUserInfoId") Long CurrenUserInfoId);
}
