/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { CiDeliveryTruck } from 'react-icons/ci';
import AppContext from '../context/AppContext/AppContext';
import { DataContext } from '../context/dataContext/DataContext.tsx';
import QuantitySelector from '../globalcomponent/QuantitySelector.tsx';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const apiUrl = 'https://fakestoreapi.com/products/';
    const { addProductToCart, addProductToWishList, logInFirst } = useContext(AppContext);
    const { user } = useContext(DataContext);

    async function getDetails() {
        setLoading(true);
        let response = await fetch(apiUrl + id);
        let data = await response.json();
        setProduct(data);
        setLoading(false);
        console.log(data);
    }

    useEffect(() => {
        getDetails();
    }, [id]);

    const handleQuantityChange = (quantity) => {
        setSelectedQuantity(quantity);
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={i} style={{ color: 'gold', fontSize: '24px', marginLeft: '8px' }} />);
        }

        if (halfStar) {
            stars.push(<FaStarHalfAlt key="half" style={{ color: 'gold', fontSize: '24px', marginLeft: '8px' }} />);
        }

        return stars;
    };

    return (
        <div className='grid grid-flow-col max-w-7xl mx-auto justify-center mt-8 px-4'>
            {loading ? "Loading Fetched Data" : (
                <div className='flex flex-col lg:flex-row gap-10 '>
                    <div className='w-full lg:w-1/4 h-fit mt-10 border-transparent border shadow-lg p-8 rounded-md flex flex-col justify-between hover:shadow-2xl hover:border hover:border-blue-500'>
                        <img src={product.image} className='h-64 mx-auto' alt={product.title} />
                        <div className='mt-4 flex justify-between'>
                            <div>
                                <p className='text-xl text-orange-400'>${product.price}</p>
                            </div>
                            <div className='cursor-pointer mr-4'>
                                <FaRegHeart onClick={() => { addProductToWishList(product) }} className='text-xl hover:scale-150' />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-2/6 mt-6 lg:ml-10'>
                        <div className='pt-4 capitalize text-gray-900 pb-4'>
                            <p className='text-xl pb-4'>Title:</p>
                            <p>{product.title}</p>
                        </div>
                        <div>
                            <p className='capitalize text-xl text-gray-900 pb-4'>Description:</p>
                            <p>{product.description}</p>
                        </div>
                        <div className=''>
                            {product.rating && (
                                <div className='w-full flex flex-col lg:flex-row items-center mt-12'>
                                    <div className='flex'>
                                        {renderStars(product.rating.rate)}
                                    </div>
                                    <p className='ml-2'>{product.rating.count}<span className='text-sm text-blue-400'> ratings</span></p>
                                </div>
                            )}
                        </div>
                        <div className='grid grid-cols-4 w-max mt-2 gap-2'>
                            <div className='flex flex-col items-center w-24  border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                                <img src='https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png' alt='Free Delivery' className='h-12 mb-2' />
                                <p className='text-center text-sm'>Free Delivery</p>
                            </div>
                            <div className='flex flex-col items-center w-24  border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                                <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt='Cash On Delivery' className='h-12 mb-2' />
                                <p className='text-center text-sm'>Cash On Delivery</p>
                            </div>
                            <div className='flex flex-col items-center w-24  border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                                <CiDeliveryTruck size={30} className='mb-2' />
                                <p className='text-center text-sm'>Fast Delivery</p>
                            </div>
                            <div className='flex flex-col items-center w-24  border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                                <CiDeliveryTruck size={30} className='mb-2' />
                                <p className='text-center text-sm'>Fast Delivery</p>
                            </div>
                        </div>

                    </div>
                    <div className='lg:w-60 rounded-md shadow-md gap-y-2 h-fit'>
                        <div className='w-full lg:flex-row justify-between items-center'>
                            <div>
                                <p className='text-3xl'>${product.price}</p>
                            </div>
                            <p>Free Delivery By { }</p>
                            <p>Deliver to Location</p>
                            <p className='text-xl text-green-600'>In Stock</p>
                            <p className='text-sm'>ships from <span className='ml-4'>Quick Cart</span></p>
                            <p className='text-sm'>sold by <span className='ml-4'>shop Name</span></p>

                            <p className='mt-4'>Quantity<QuantitySelector onQuantityChange={handleQuantityChange} /></p>
                            
                            <div className='flex  mb-20'>
                                {user.status !== 200 && (
                                    <div className='flex-col justify-center items-center mx-auto mt-4'>
                                        
                                        <button onClick={() => { logInFirst(product) }} className='rounded-md bg-yellow-400 mt-1 pl-8 pr-8 hover:scale-100 hover:bg-yellow-500'>Add to Cart</button>
                                        <button onClick={() => { logInFirst(product) }} className='rounded-md bg-orange-400 mt-1 pl-8 pr-8 hover:scale-100 hover:bg-orange-600'>Order Now</button>
                                   
                                    </div>
                                )}
                                {user.status === 200 && (
                                    <div className='flex-col justify-center items-center mx-auto mt-4'>
                                        <button onClick={() => { addProductToCart(product, selectedQuantity, new Date()) }} className='rounded-md bg-yellow-400 mt-1 pl-8 pr-8 hover:scale-100 hover:bg-yellow-500'>Add to Cart</button>
                                        <button onClick={() => { addProductToCart(product, selectedQuantity, new Date()) }} className='rounded-md bg-orange-400 mt-1 pl-8 pr-8 hover:scale-100 hover:bg-orange-600'>Order Now</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
