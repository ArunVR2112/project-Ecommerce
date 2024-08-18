package com.ecom.commercial.E_Commerrce.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="address")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Address {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="addressId")
	private Long id;
	private String street;
    private String city;
    private String state;
    private String zipCode;
    
    @ManyToOne
    @JoinColumn(name = "userinfoid", nullable = false)
    private UserInfo userInfo;
    
    
}
