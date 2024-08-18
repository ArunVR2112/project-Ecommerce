//package com.ecom.commercial.E_Commerrce.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@SuppressWarnings("deprecation")
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
//public class WebSecurityConfig {
//    
//    private static final String[] WHITELIST = {
//        "/userloginvalidate",
//        "/login",
//        "/register",
//        "/public/**" // Added a pattern for public resources
//    };
//    
//
//	@Bean
//    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
//        // Allow everyone to log out
//        httpSecurity
//        .authorizeRequests()
//        .requestMatchers(WHITELIST)
//        .permitAll()
//        .anyRequest()
//        .authenticated();
//        return httpSecurity.build();
//    }
//}
