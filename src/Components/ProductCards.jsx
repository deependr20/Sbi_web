import React from 'react'
import { Link } from 'react-router-dom'

const ProductCards = ({ svg, title ,para}) => {
  return (
    <div className='flex md:flex-row flex-col  gap-16 md:mb-24 mb-16'>
        <div className='md:w-[62%] w-[100%]'>
            <div className='p-3 w-fit shadow-[0_0_15px_15px_rgba(0,149,255,.05)] rounded-full'>
              {svg}
            </div>
            <h2 className='md:text-[2.3rem] text-[1.8rem] leading-[1.1] font-semibold mt-5'>{title}</h2>
            <p className='mt-4 text-slate-500 text-sm md:text-base font-medium leading-[1.2rem]'>{para}</p>
            <div className='w-fit text-blue-400 text-lg  font-medium flex items-center gap-4 border-2 border-blue-400 px-6 py-[10px] mt-7  rounded-xl'>
                 <Link className=''>Learn more</Link>
                 <i className="ri-arrow-right-up-line font-semibold "></i>
            </div>
        </div>
        <div className="md:w-[38%]  w-[60%]">
            <div className="bg-[#6670ff]  h-[75%] flex rotate-3 items-end overflow-hidden rounded-[2.9rem] ">
              <img 
                className="w-[100%]  h-[16rem]  md:h-[90%] object-cover object-top "
                src="src/assets/home/sbiCardImg.webp"
                alt="SBI Card "
              />
            </div>
          </div>
    </div>
  )
}

export default ProductCards