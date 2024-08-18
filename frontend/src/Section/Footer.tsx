import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { MdMarkEmailRead } from 'react-icons/md';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [
        { label: 'YouTube', icon: FaYoutube, link: 'https://youtube.com' },
        { label: 'Instagram', icon: FaInstagram, link: 'https://instagram.com' },
        { label: 'Twitter', icon: FaTwitter, link: 'https://twitter.com' },
        { label: 'LinkedIn', icon: CiLinkedin, link: 'https://linkedin.com' },
        { label: 'Email', icon: MdMarkEmailRead, link: 'mailto:info@mycommerce.com' }
    ];

    return (
        <footer className='bg-gray-50 dark:bg-gray-900 text-white py-8 mt-auto'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
                    {/* Social Links */}
                    <div className='flex flex-wrap justify-center gap-4 items-center mb-4 md:mb-0'>
                        {socialLinks.map((value) => {
                            const Icon = value.icon;
                            return (
                                <a
                                    key={value.label}
                                    href={value.link}
                                    className='flex items-center gap-2 hover:text-gray-400 transition-colors duration-200'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={24} />
                                    <span className='hidden sm:inline'>{value.label}</span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Links */}
                    <div className='flex flex-col md:flex-row gap-4 text-center md:text-left'>
                        <Link to='/about' className='hover:text-gray-400 transition-colors duration-200'>
                            About Us
                        </Link>
                        <Link to='/contact' className='hover:text-gray-400 transition-colors duration-200'>
                            Contact Us
                        </Link>
                        <Link to='/privacy' className='hover:text-gray-400 transition-colors duration-200'>
                            Privacy Policy
                        </Link>
                        <Link to='/terms' className='hover:text-gray-400 transition-colors duration-200'>
                            Terms of Service
                        </Link>
                    </div>
                </div>
                {/* Copyright */}
                <div className='text-center text-sm mt-4 md:mt-0'>
                    &copy; {new Date().getFullYear()} MyCommerce. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
