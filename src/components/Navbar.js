import React from 'react'
import logo from '../img/logo.jpg'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className='fixed top-0 left-0 w-full flex justify-between items-center border-b-2 px-7 bg-white z-50'>
            <Link className=" flex items-center text-2xl py-4 font-bold" to="#">
                <img src={logo} alt="logo" className=' pr-5 w-24' />
                Vikram <span className="text-2xl text-yellow-500 px-2">Aviation</span> Pvt Ltd
            </Link>
            <div >
                <ul className=" flex ">
                    <li className="px-2 text-yellow-500 text-xl font-bold hover:bg-yellow-300 p-2 text-center rounded-md"><Link to="/">Home</Link></li>
                    <li className="px-2 text-gray-600 text-xl font-bold hover:bg-yellow-300 p-2 text-center rounded-md"><Link to="/about us">About Us</Link></li>
                    <li className="px-2 text-gray-600 text-xl font-bold hover:bg-yellow-300 p-2 text-center rounded-md"><Link to="/ what we do">What We Do</Link></li>
                    <li className="px-2 text-gray-600 text-xl font-bold hover:bg-yellow-300 p-2 text-center rounded-md"><Link to="/ame training">AME Training</Link></li>
                    <li className="px-2 text-gray-600 text-xl font-bold hover:bg-yellow-300 p-2 text-center rounded-md"><Link to="/reach us">Reach Us</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
