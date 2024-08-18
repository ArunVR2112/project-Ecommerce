package com.ecom.commercial.E_Commerrce.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;



@Data
@Entity
public class Admin extends BaseEntity{
	
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name="admin_id")
	private long id;
	
	
	@Column(name="admin_name",nullable = false)
	private String name;
	
	@Column(name="admin_email",nullable = false)
	private String email;
	
	@Column(name="admin_mobile")
	private String mobile;
	
	@Column(name="admin_password",nullable = false)
	private String password;

	
}
