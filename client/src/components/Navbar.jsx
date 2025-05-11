import React from 'react'
import NavbarLogo from '../assets/NavbarLogo.png';
import file from '../assets/file.png';
import olivia from '../assets/olivia.jpg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className='flex justify-between items-center bg-fefefe w-full h-[65px] px-8 border-b border-[#D3DCE4] shadow-[0px_4px_16px_0px_#1C240F0A] rotate-[0.18deg]'>
      <div className='flex items-centre gap-7'>
        <img src={NavbarLogo} className='w-[32px] h-[29.33px] rotate-[0.18deg] mt-1' />
        <div className='flex '>
          <Link
            to="/"
            className={`font-interTight font-medium rounded-[60px] px-6 py-2 gap-[80px] rotate-[0.18deg] flex items-center w-[100px] h-[40px] ${isActive('/') ? 'bg-[#0E3228] text-white' : 'text-dark'}`}
          >
            Home
          </Link>

          <Link
            to="/habitat"
            className={`font-interTight font-medium rounded-[60px] px-6 py-2 gap-[80px] rotate-[0.18deg] flex items-center w-[100px] h-[40px] ${isActive('/habitat') ? 'bg-[#0E3228] text-white' : 'text-dark'}`}
          >
            Habitats
          </Link>

          <Link
            to="/recording"
            className={`font-interTight font-medium rounded-[60px] px-6 py-2 gap-[80px] rotate-[0.18deg] flex items-center w-[117px] h-[40px] ${isActive('/recording') ? 'bg-[#0E3228] text-white' : 'text-dark'}`}
          >
            Recordings
          </Link>
        </div>
      </div>
      <div className='flex gap-[16px]'>
          <div className='w-[102px] h-[40px] rounded-[60px] px-4 py-[10px] gap-2 bg-[#EBEFF3] flex items-center'>
            <img src={file} alt="file" className='w-[20px] h-[20px] '/>
            <span className='w-[42px] h-[20px] font-interTight font-medium text-[14px] leading-[20px] tracking-[0%]'>Report</span>
          </div>
          <div>
             <img src={olivia} alt='olivia' className='w-[40px] h-[40px] rounded-full'/>
          </div>
      </div>
    </div>
  )
}

export default Navbar
