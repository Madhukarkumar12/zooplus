import React from 'react'
import NavbarLogo from '../assets/NavbarLogo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className='flex justify-between items-center bg-fefefe w-full h-[72px] px-8 border-b border-[#D3DCE4] shadow-[0px_4px_16px_0px_#1C240F0A] rotate-[0.18deg]'>
      <div className='flex items-centre gap-7'>
        <img src={NavbarLogo} className='w-[32px] h-[29.33px] rotate-[0.18deg] mt-1' />
        <div className='flex '>
          <Link
            to="/"
            className={`font-interTight font-medium rounded-[60px] px-6 py-2 gap-[80px] rotate-[0.18deg] flex items-center w-[95px] h-[40px] ${isActive('/') ? 'bg-[#0E3228] text-white' : 'text-dark'}`}
          >
            Home
          </Link>

          <Link
            to="/habbit"
            className={`font-interTight font-medium rounded-[60px] px-6 py-2 gap-[80px] rotate-[0.18deg] flex items-center w-[95px] h-[40px] ${isActive('/habbit') ? 'bg-[#0E3228] text-white' : 'text-dark'}`}
          >
            Habitats
          </Link>

          <Link
            to="/recording"
            className={`font-interTight font-medium rounded-[60px] px-6 py-2 gap-[80px] rotate-[0.18deg] flex items-center w-[95px] h-[40px] ${isActive('/recording') ? 'bg-[#0E3228] text-white' : 'text-dark'}`}
          >
            Recordings
          </Link>


        </div>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Navbar
