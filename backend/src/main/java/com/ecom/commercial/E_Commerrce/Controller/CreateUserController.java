package com.ecom.commercial.E_Commerrce.Controller;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ecom.commercial.E_Commerrce.Model.UserInfo;
import com.ecom.commercial.E_Commerrce.Services.UserServiceClass;

import ch.qos.logback.core.model.Model;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

@CrossOrigin("*")
@RestController
public class CreateUserController {
	
	private UserServiceClass serviceClass;

		public CreateUserController(UserServiceClass serviceClass) {
			super();
			this.serviceClass = serviceClass;
		}

		@PostMapping("/api/user/data")
		public ResponseEntity<String> saveUsers(@RequestBody UserInfo userInfo) {
			
			UserInfo user= serviceClass.saveUsers(userInfo);
			if(user==null) {
				return new ResponseEntity<String>("User Not Created",HttpStatus.BAD_REQUEST);
			}
			return new ResponseEntity<String>("User Created Successfully !",HttpStatus.OK);
		}
	
		// User Login Related Codes
	@PostMapping("/api/user/loginvalidate")
		public ResponseEntity<Object> userlogin(@RequestBody Map<String, String> loginData, HttpServletResponse res) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        UserInfo u = serviceClass.checkLogin(email, password);
        
        if (u != null && email.equals(u.getEmail())) 
        {
            res.addCookie(new Cookie("username", u.getEmail()));
            return ResponseEntity.ok(u); // Return 200 OK with user information
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password"); // Return 401 Unauthorized
        }
    	}
	
	//Adding Update USer 
	@PutMapping("/api/update/user/")
	public UserInfo updateUser(@RequestBody UserInfo userInfo ) {
		
		return userInfo;
		
	}

	
	
}

