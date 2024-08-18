package com.ecom.commercial.E_Commerrce.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "userinfo")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userinfoid;
    private String name;
   
    private String email;
    private String password;
    private String mobileno;


}
