import React from 'react'
import NavbarLogo from '../assets/NavbarLogo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className='flex justify-between items-center bg-fefefe w-full h-[72px]'>
      <div className='flex items-centre gap-7'>
        <img src={NavbarLogo} className='w-[32px] h-[32px] opacity-1' />
        <div className='flex gap-5'>
          <Link
            to="/"
            className={`font-medium rounded-2xl ${isActive('/') ? 'bg-darkGreen text-fefefe opacity-1 h-[40px] ' : 'text-dark'
              }`}
          >
            Home
          </Link>

          <Link to="/habbit" className={`font-medium ${isActive('/habbit') ? 'bg-darkGreen text-fefefe' : 'text-dark'}`}>
            Habitats
          </Link>
          <Link to="/recording" className={`font-medium ${isActive('/recording') ? 'bg-darkGreen text-fefefe' : 'text-dark'}`}>
            Recordings
          </Link>

        </div>
      </div>
      <div className=''></div>
    </div>
  )
}

export default Navbar
