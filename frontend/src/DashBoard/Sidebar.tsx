import React from 'react';
import { CiSettings } from "react-icons/ci";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FcSupport } from "react-icons/fc";
import { Link } from 'react-router-dom';



const Sidebar = () => {
    let menuItem = [
        {
            path: "/dashboard/profile",
            name: "Profile",
            icon: <CgProfile />
        },
        {
            path: "/dashboard/home",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/dashboard/orders",
            name: "Orders",
            icon: <MdOutlineShoppingBag />
        },
        {
            path: "/dashboard/cart",
            name: "Cart",
            icon: <FaShoppingCart />
        },
        {
            path: "/dashboard/settings",
            name: "Settings",
            icon: <CiSettings />
        },
        {
            path: "/dashboard/support",
            name: "Support",
            icon: <FcSupport />
        }
    ];

    return (
        <div className='flex fixed top-0'>
            <div className="bg-gray-700 lg:w-60 md:w-40 sm:w- text-white min-h-screen">
                <div className="flex items-center justify-between p-4">
                    <h1 className="text-2xl">Logo</h1>
                    <div className="text-xl">Bars</div>
                </div>
                <div className='pt-24'>
                    {
                        menuItem.map((item, index) => (
                            <Link to={item.path} key={item.name} className='capitalize'>
                                <div className='flex items-center mt-10 lg:gap-4 pl-4 hover:bg-blue-300 hover:text-white text-xl'>
                                    <p className='mt-1'>{item.icon}</p>
                                    <p className=''>{item.name}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Sidebar;