import React from 'react'
import NavbarLogo from '../assets/NavbarLogo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className='flex justify-between items-center bg-fefefe w-full h-[72px]'>
       <div className='flex items-centre gap-7'>
        <img src={NavbarLogo} className='w-[32px] h-[32px] opacity-1'/>
        <div className='flex gap-5'>
          <Link to="/" className='font-medium text-dark'>Home</Link>
          <Link to="/habbit">Habits</Link>
          <Link to="/recording">Recordings</Link>
        </div>
       </div>
       <div className=''></div>
    </div>
  )
}

export default Navbar
