import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';
import AppContext from '../context/AppContext/AppContext.js';
import { DataContext } from '../context/dataContext/DataContext.tsx';
import { FaCartPlus } from "react-icons/fa";
const ProductCard = ({ product }) => {
    const { addProductToWishList, logInFirst, addProductToCart } = useContext(AppContext);
    const { user } = useContext(DataContext);



    return (
        <Link to={`/product/${product.id}`} className='flex-grow'>
        <div className=' border-transparent border shadow-lg rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-xl transition-shadow duration-100  w-60'>
            <img
                src={product.image}
                alt={product.title}
                className='h-40 sm:h-56 md:h-64 w-full '
            />
            <div className='p-4 flex flex-col justify-between flex-grow'>
               
                    <h3 className='mt-4 text-sm sm:text-base md:text-lg font-semibold text-gray-700'>{product.title}</h3>
                
                <div className='mt-4 flex justify-between items-center'>
                    <p className='text-sm sm:text-base md:text-lg text-gray-900'>${product.price.toFixed(2)}</p>

                    <div className='flex gap-4'>
                        <FaCartPlus onClick={user.status === 200 ? () => addProductToCart(product) : logInFirst}
                        className='text-xl text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer'/>
                        <FaRegHeart
                            onClick={user.status === 200 ? () => addProductToWishList(product) : logInFirst}
                            className='text-xl text-gray-500 hover:text-red-500 transition-colors duration-200 cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default ProductCard;
