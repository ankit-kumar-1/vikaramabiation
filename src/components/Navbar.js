import React, { useState } from 'react';
import logo from '../img/logo.jpg';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navItems = ['Home', 'About Us', 'What We Do', 'AME Training', 'Reach Us'];

    return (
        <nav className='fixed top-0 left-0 w-full flex flex-wrap justify-between items-center border-b-2 px-4 md:px-7 bg-gray-100 bg-opacity-85 z-50'>
            <Link className="flex items-center text-xl md:text-2xl py-2 font-bold" to="/">
                <img src={logo} alt="logo" className='pr-2 md:pr-5 w-16 md:w-24' />
                Vikram <span className="text-xl md:text-2xl text-yellow-500 px-1 md:px-2">Aviation</span> Pvt Ltd
            </Link>

            {/* Hamburger menu button */}
            <button
                onClick={toggleMenu}
                className="md:hidden text-gray-600 focus:outline-none"
            >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                    ) : (
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    )}
                </svg>
            </button>

            {/* Navigation menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
                <ul className="flex flex-col md:flex-row md:space-x-4">
                    {navItems.map((item, index) => {
                        const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`;
                        return (
                            <li key={index} className="text-center">
                                <Link
                                    to={path}
                                    className={`block px-3 py-2 text-lg md:text-xl font-bold ${location.pathname === path ? 'text-yellow-600' : 'text-gray-600'} hover:bg-yellow-300 rounded-md transition-all duration-300 ease-in-out transform hover:scale-110`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;