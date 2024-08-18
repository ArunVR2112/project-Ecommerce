package com.ecom.commercial.E_Commerrce.Model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Table(name="orders")
public class Order {
	
	@Id
	@Column(name = "orderid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;	

	@Column(name="orderdate")
	private LocalDateTime orderDate;
	
	
//	product id
	@Column(name="productid")
	private long productid; 
//	total price

	@ManyToOne
	@JoinColumn(name="addressId",nullable = false)
	private Address address;
	
    @ManyToOne
    @JoinColumn(name = "userinfoid", nullable = false)
    private UserInfo userInfo;
}
