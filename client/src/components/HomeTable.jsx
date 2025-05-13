import { Plus } from 'lucide-react'
import React from 'react'

const HomeTable = () => {
  return (
    <div className=''>
      <div className='flex justify-between items-center ml-[65px] mr-[63px]'>
        <div className='flex gap-3 items-center'>
            <h1 className='w-auto h-[32px] font-interTight font-semibold text-[24px] leading-[32px] text-[#1E1E1E]'>Camera Management</h1>
            <div className='flex items-center w-auto height-[34px] rounded-[60px] px-[16px] py-[1px] gap-[8px] bg-[#EBEFF3]'>
                <h1 className='w-auto h-[14px] font-interTight font-medium text-[12px] leading-[14px] text-[#1E1E1E]'>Total Cameras</h1>
                <div className='w-[24px] h-[24px] rounded-full p-[5px] gap-[10px] bg-[#0E3228] items-center'>
                    <span className='w-[14px] h-[14px] font-interTight font-medium text-[12px] leading-[14px] text-[#FEFEFE] flex items-center'>25</span>
                </div>
            </div>
        </div>
        <div className='flex'>
            <button className='flex justify-center items-center w-auto h-[40px] rounded-[60px] bg-[#0E3228] gap-2'>
                <span><Plus className='w-[20px] h-[20px] text-[#FEFEFE] ml-[8px]'/></span>
                <h1 className='w-auto h-[20px] font-interTight font-medium text-[14px] leading-[20px] text-[#FEFEFE] mr-[13px]'>Add New Camera</h1>
            </button>
        </div>
      </div>
      {/* table will be implemented inside this..... */}
      <div></div>
    </div>
  )
}

export default HomeTable