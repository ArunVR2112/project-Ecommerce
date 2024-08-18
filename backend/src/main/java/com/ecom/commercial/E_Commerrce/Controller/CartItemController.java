package com.ecom.commercial.E_Commerrce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.commercial.E_Commerrce.Model.CartItem;
import com.ecom.commercial.E_Commerrce.Services.CartItemService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;
    
    

    
    @PostMapping("/cart/items")
    public ResponseEntity<CartItem> addToCart(@RequestBody CartItem cartItem) {
    	long cartItemId=cartItem.getCartItemId();
     	long currentUserInfoId=cartItem.getUserInfo().getUserinfoid();

    	CartItem presentCart=cartItemService.getCartItemById(cartItemId,currentUserInfoId);
   
    	if(presentCart.getCartItemId()==cartItemId && currentUserInfoId==presentCart.getUserInfo().getUserinfoid()) {
    	
    		return updateCart(cartItemId,currentUserInfoId,cartItem.getItemQuantity());
    		
    	}
    	CartItem savedCartItem = cartItemService.saveToCart(cartItem);
        return ResponseEntity.ok(savedCartItem);
    	
    	
    }

    
    
    
    
    
//    @GetMapping("/cart/items/{userId}")
//    public ResponseEntity<List<CartItem>> getAllCartItems(@PathVariable Long userId) {
//        List<CartItem> cartItems = cartItemService.getAllCartItems(userId);
//
//        return ResponseEntity.ok(cartItems);
//    }
    
    

    @DeleteMapping("/del/{id}/{currenUserInfoId}")
    public ResponseEntity<String> delete(@PathVariable("id") long id, @PathVariable("currenUserInfoId") long currenUserInfoId) {
        cartItemService.deleteCartItems(id, currenUserInfoId);
        return new ResponseEntity<>("Cart item deleted successfully", HttpStatus.OK);
    }


    @PutMapping("/cart/update/{id}/{currenUserInfoId}/{quantity}")
    public ResponseEntity<CartItem> updateCart(
            @PathVariable("id") long id,
            @PathVariable("currenUserInfoId") long currenUserInfoId,
            @PathVariable("quantity") String quantity) {
      
        // Assuming you have proper validation and parsing of 'quantity' in your service
        CartItem updatedCartItem = cartItemService.updateCartItemQnty(id, currenUserInfoId, quantity);
        
        if (updatedCartItem != null) {
            return ResponseEntity.ok(updatedCartItem); // Return 200 OK with updated cart item
        } else {
            return ResponseEntity.notFound().build(); // Return 404 Not Found if cart item not found
        }
    }
}
