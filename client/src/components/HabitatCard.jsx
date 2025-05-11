import React from 'react';
import option from '../assets/option.png';
import zebra from '../assets/zebra.png';
import giraffe from '../assets/giraffe.png';
import ostrich from '../assets/ostrich.jpg';
import gazeles from '../assets/gazeles.jpg';
import field1 from '../assets/field1.jpg';

const HabitatCard = () => {
  return (
    <div>
      <div className='w-[410.67px] h-[512px] rounded-[24px] border border-[#D3DCE4] bg-[#FEFEFE] shadow-[2px_4px_24px_0px_#1C240F0A] flex flex-col gap-2'>
         <div className='flex justify-between px-3  mt-5'>
            <h1 className='w-auto h-[30px] font-interTight font-semibold text-[20px] leading-[30px] text-[#1E1E1E]'>Savanna Habitat</h1>
            <img src={option} className='h-[22px] cursor-pointer'/>
         </div>
         <div className='flex flex-col gap-2 px-3'>
            <div className='flex items-center'>
                <img src={giraffe} className='w-[44px] h-[44px] rounded-full border-[1.65px] z-10'/>
                <img src={zebra} className='w-[44px] h-[44px] rounded-full border-[1.65px] -ml-3 z-20'/>
                <img src={ostrich} className='w-[44px] h-[44px] rounded-full border-[1.65px] -ml-3 z-30'/>
                <img src={gazeles} className='w-[44px] h-[44px] rounded-full border-[1.65px] -ml-3 z-40'/>
            </div>
            <h1 className='w-auto h-[20px] font-interTight font-semibold text-[14px] leading-[20px] text-[#1E1E1E]'>Giraffes, Zebras, Ostriches, Gazelles</h1>
         </div>
         <div className='px-3'>
            <p className='w-auto h-[96px] font-interTight font-normal text-base leading-[24px] text-[#1E1E1E]'>
                Experience the vast African plains where giraffes gracefully roam alongside zebras and gazelles. Watch as ostriches sprint across the open landscape, bringing the savanna to life.
            </p>
         </div>
         <div>
            <img src={field1} className='w-[411px] h-[260px] rounded-br-[24px] rounded-bl-[24px] bg-[#FFFFFF] object-cover'/>
         </div>
      </div>
    </div>
  )
}

export default HabitatCard
