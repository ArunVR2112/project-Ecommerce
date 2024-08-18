package com.ecom.commercial.E_Commerrce.Model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "cartitems")
@Data
@NoArgsConstructor
@AllArgsConstructor
@SequenceGenerator(name = "cartitemidseq", initialValue = 5, allocationSize = 100)
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cartitemidseq")
    private long itemId;
    
    private long cartItemId;
    private String itemTitle;

    private String itemQuantity;

    private long price;

    private LocalDateTime createDateTime;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userinfoid", nullable = false)
    private UserInfo userInfo;
}
