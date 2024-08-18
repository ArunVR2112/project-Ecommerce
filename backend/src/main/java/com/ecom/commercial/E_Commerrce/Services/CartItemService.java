package com.ecom.commercial.E_Commerrce.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ecom.commercial.E_Commerrce.Model.CartItem;

@Service
public interface CartItemService 
{

    CartItem saveToCart(CartItem cartItem);
    
  
//	List<CartItem> getAllCartItems(Long userId);
	
	void deleteCartItems(Long cartUtemId,Long currenUserInfoId);
	
	
	CartItem updateCartItemQnty(Long cartItemId,Long currenUserInfoId,String qnt);
	
	 CartItem getCartItemById(Long cartItemId,Long currentUserInfoId);
}
