import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {assets} from "../assets/assets"
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const {user, setShowLogin, logout, credit} = useContext(AppContext);
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);


    return (
        <div className='flex item-center justify-between py-4'>
            <Link to= '/'>
                <img src="Logo.png" alt="" className='w-28 sm:w-32 lg:w-50 ' />
            </Link>

            <div>
                {user ? 
                    <div className='flex items-center gap-2 sm:gap-3'>
                        <button onClick={()=>{navigate('/buy')}} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'>
                            <img src={assets.credit_star} alt="" className='w-5'/>
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credit left : {credit}</p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>
                        <div 
                            className='relative cursor-pointer' 
                            onClick={() => setShowDropdown(prev => !prev)} // toggle on click for mobile
                            onMouseEnter={() => setShowDropdown(true)}     // open on hover for desktop
                            onMouseLeave={() => setShowDropdown(false)}    // close on mouse out (desktop)
                            >
                            <img src={assets.profile_icon} alt="" className='w-10 drop-shadow' />
                            
                            {showDropdown && (
                                <div className="absolute top-0 right-0 z-10 text-black rounded pt-12">
                                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                    <li onClick={logout} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                                </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    :
                    <div className='flex item-center gap-2 sm:gap-5'>
                        <p onClick={()=>{navigate("/buy")}} className='cursor-pointer lg:py-1'>Pricing</p>
                        <button onClick={()=> setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer'>Login</button>
                    </div>
                }   
            </div>

        </div>
    )
}

export default Navbar