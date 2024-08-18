package com.ecom.commercial.E_Commerrce.Services.Implements;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ecom.commercial.E_Commerrce.CustomException.ResourceNotFoundExecption;
import com.ecom.commercial.E_Commerrce.Model.CartItem;
import com.ecom.commercial.E_Commerrce.Model.UserInfo;
import com.ecom.commercial.E_Commerrce.Repository.CartRepository;
import com.ecom.commercial.E_Commerrce.Repository.UserRepository;
import com.ecom.commercial.E_Commerrce.Services.CartItemService;

@Service
public class CartItemServiceImplementation implements CartItemService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional
    public CartItem saveToCart(CartItem cartItem) {
        UserInfo userInfo = cartItem.getUserInfo();
        if (userInfo != null && userInfo.getUserinfoid() == 0) {
           
            userInfo = userRepository.save(userInfo);
            cartItem.setUserInfo(userInfo);
        }
        return cartRepository.save(cartItem);
    }

//    @Override
//    public List<CartItem> getAllCartItems(Long userId) {
//        return cartRepository.findByUserInfoUserInfoId(userId);
//    }
//    
    @Override
    public void deleteCartItems(Long cartItemId,Long currenUserInfoId) {

    	CartItem cartItem= getCartItemById(cartItemId,currenUserInfoId);
    
    	cartRepository.deleteById(cartItem.getItemId());
    	
    }


	@Override
	public CartItem updateCartItemQnty(Long cartItemId,Long currenUserInfoId, String qnt) {
		// TODO Auto-generated method stub
		 
		 CartItem cartItem=getCartItemById(cartItemId,currenUserInfoId);
		 long qntChange,qntPresent;
		try {
			  qntChange =Long.parseLong(qnt);
			  qntPresent= Long.parseLong(cartItem.getItemQuantity());
			  System.err.println(qntPresent+" "+qntChange);
			  
			  cartItem.setItemQuantity(String.valueOf(qntPresent+qntChange));
			  
		}catch (Exception e) {
			 throw new ResourceNotFoundExecption(""+qnt, ""+qnt, cartItem);
		}
		return cartRepository.save(cartItem);
	}
	
	@Override
	public CartItem getCartItemById(Long cartItemId,Long currenUserInfoId) {
		CartItem cartItem =cartRepository.findByCartItemId(cartItemId,currenUserInfoId);
		
		return cartItem;
	}

}
