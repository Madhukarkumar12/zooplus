import { Plus } from 'lucide-react'
import React from 'react'

const HeroHabitat = () => {
  return (
    <div className='flex justify-between w-full h-[44px] px-[80px] gap-2 items-center mt-5 '>
      <div className='flex gap-3 justify-center items-center'>
        <h1 className='w-[91px] h-[32px] font-interTight font-semibold text-2xl leading-8 text-[#1E1E1E]'>Habitats</h1>
        <div className='w-[35px] h-[35px] rounded-full p-[10px] bg-[#415E37] flex items-center justify-center gap-[10px]'><span className='w-[24px] h-[24px] font-interTight font-medium text-[#FEFEFE] text-[16px] leading-[24px] tracking-[0%] text-center'>5</span></div>
      </div>
      <div className='flex justify-center items-center'>
        <button className='w-[165px] h-[40px] rounded-full px-4 py-[10px] gap-2 border border-[#0E3228] bg-[#0E3228] shadow-[0px_1px_2px_0px_#1018280D] flex items-center justify-center text-white'>
            <span><Plus className='w-[20px] h-[20px]'/></span>
               <h1 className='w-[105px] h-[20px] font-interTight font-medium text-sm leading-5 text-[#FEFEFE]'>Add New habitat</h1>
        </button>
      </div>
    </div>
  )
}

export default HeroHabitat
