/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../Component/ProductCard';


const Category = () => {
    const {id}=useParams();
    let apiUrl =`https://fakestoreapi.com/products/category/`;

    let [product,setProduct]=useState([]);
    let [loading,setLoading]=useState(true);

    async function getProductCategory(){
        setLoading(true)
        let respons=await fetch(apiUrl+id);
        let data= await respons.json();
        setProduct(data);
        setLoading(false);
    }

    useEffect(()=>{
        getProductCategory()
    },[id])
  return (
    <div className='max-w-7xl mx-auto flex flex-wrap  justify-between'>
        {
            loading ? "Fetching Category Details":(
                product.map((data)=>{return(
                    <ProductCard product={data}/>
                )})
            )
                
        }
    </div>
  )
}

export default Category
