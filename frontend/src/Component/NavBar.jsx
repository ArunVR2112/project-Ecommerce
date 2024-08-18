import React, { useContext, useEffect, useState } from 'react';
import { MdOutlineHome } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // <-- Use `useNavigate` instead of `useHistory`
import { DataContext } from '../context/dataContext/DataContext.tsx';
import { CgProfile } from "react-icons/cg";
import { useLocation } from 'react-router-dom';
const NavBar = ({ setOpenCart, setOpenWishList }) => {
    const apiUrl = 'https://fakestoreapi.com/products/categories';
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [nav, setNav] = useState(false);
    const { user } = useContext(DataContext);
    const navigate = useNavigate(); 
    const location = useLocation();
    useEffect(() => {
        const getAllResponses = async () => {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        getAllResponses();
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            navigate(`/search?query=${searchQuery}`); 
        }
    };


    const isExcludedPage = [
        '/login',
        '/registration',
        '/dashboard',
    ].includes(location.pathname);


    return (
        <div className='flex justify-between items-center h-16 lg:w-full bg-gray-50 dark:bg-gray-900 px-4 lg:px-8'>
            {/* Logo */}
            <Link to="/" className='flex items-center gap-3 lg:gap-6 text-white cursor-pointer'>
                <MdOutlineHome size={24} />
                <h2 className='text-lg lg:text-xl font-semibold'>QuickCart</h2>
            </Link>


            {!isExcludedPage && (
                <div className='hidden md:flex items-center justify-center mx-4'>
                    <form onSubmit={handleSearchSubmit} className='w-full max-w-lg'>
                        <div className='flex flex-1'>
                            <input
                                type='text'
                                className='w-full px-4 py-2 rounded-l-md focus:outline-none'
                                placeholder='Search products...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button type='submit' className='px-4 py-2 bg-gray-800 text-white rounded-r-md hover:bg-gray-700'>
                                Search
                            </button>
                        
                        </div>
                    </form>
                </div>
            )}
            {/* Links and Icons */}
            <div className='hidden md:flex items-center gap-4 lg:gap-6 text-white'>
                {categories.map((category) => (
                    <Link to={`category/${category}`} key={category} className='capitalize hover:text-gray-300'>
                        {category}
                    </Link>
                ))}
                {user.status !== 200 ? (
                    <Link to='/login' className='capitalize hover:text-gray-300'>
                        Sign in
                    </Link>
                ) : (
                    <div className='flex items-center gap-4'>
                        <IoIosCart className='hover:scale-110 transition-transform' size={32} onClick={() => { setOpenCart(true); setNav(false); }} />
                        <FaRegHeart className='hover:scale-110 transition-transform' size={32} onClick={() => { setOpenWishList(true); setNav(false); }} />
                        <Link to='/dashboard'>
                            <CgProfile className='hover:scale-110 transition-transform' size={32} />
                        </Link>
                    </div>
                )}
            </div>

            <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

          
            <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                
                <form onSubmit={handleSearchSubmit} className='w-4/5 mb-6'>
                    <input
                        type='text'
                        className='w-full px-4 py-2 rounded-md focus:outline-none'
                        placeholder='Search products...'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </form>

                {categories.map((category) => (
                    <Link to={`category/${category}`} key={category} className='capitalize py-2 text-xl' onClick={() => setNav(false)}>
                        {category}
                    </Link>
                ))}
                {user.status !== 200 ? (
                    <Link to='/login' className='capitalize py-2 text-xl' onClick={() => setNav(false)}>
                        Sign in
                    </Link>
                ) : (
                    <div className='flex flex-col items-center gap-4 mt-4'>
                        <IoIosCart className='hover:scale-110 text-3xl' size= {30}  onClick={() => { setOpenCart(true); setNav(false); }} />
                        <FaRegHeart className='hover:scale-110 text-3xl' size= {30}   onClick={() => { setOpenWishList(true); setNav(false); }} />
                        <CgProfile className='hover:scale-110 text-3xl' size= {30}   />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
