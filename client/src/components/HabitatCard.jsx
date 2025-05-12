import React from 'react';
import option from '../assets/option.png';
import { cardData } from '../habitatinfo/HabitatInfo';

const HabitatCard = () => {
    return (
        <div className=' flex flex-wrap gap-6 px-3 mt-6 mb-[50px] ml-[85px]'>
            {
                cardData.map((item) => (
                    <div className='py-3'>
                        <div className='w-[350px] h-[500px] rounded-[24px] border border-[#D3DCE4] bg-[#FEFEFE] shadow-[2px_4px_24px_0px_#1C240F0A] flex flex-col gap-2'>
                            <div className='flex justify-between px-3  mt-5'>
                                <h1 className='w-auto h-[30px] font-interTight font-semibold text-[20px] leading-[30px] text-[#1E1E1E]'>{item.heading}</h1>
                                <img src={option} className='h-[22px] cursor-pointer' />
                            </div>
                            <div className='flex flex-col gap-2 px-3'>
                                {item.images && item.images.length >= 4 && (
                                    <div className='flex items-center'>
                                        <img src={item.images[0]} className='w-[44px] h-[44px] rounded-full border-[1.65px] z-10' />
                                        <img src={item.images[1]} className='w-[44px] h-[44px] rounded-full border-[1.65px] -ml-3 z-20' />
                                        <img src={item.images[2]} className='w-[44px] h-[44px] rounded-full border-[1.65px] -ml-3 z-30' />
                                        <img src={item.images[3]} className='w-[44px] h-[44px] rounded-full border-[1.65px] -ml-3 z-40' />
                                    </div>
                                )}
                                <h1 className='w-auto h-[20px] font-interTight font-semibold text-[14px] leading-[20px] text-[#1E1E1E]'>{item.imageHeading}</h1>
                            </div>
                            <div className='px-3 mb-4'>
                                <p className='w-auto h-[96px] font-interTight font-normal text-base leading-[24px] text-[#1E1E1E]'>
                                    {item.description}
                                </p>
                            </div>
                            <div>
                                <img src={item.field} className='w-[411px] h-[260px] rounded-br-[24px] rounded-bl-[24px] bg-[#FFFFFF] object-cover' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default HabitatCard
