import React from 'react'

const Import = () => {
    return (
        <div className='max-w-[1200px] flex flex-col lg:flex-row xl:px-0 px-8 lg:gap-0 gap-12  mt-16 lg:items-start items-center  justify-between  mx-auto'>
            <div className='lg:w-[40%] sm:w-[80%] w-[full]'>
                <h1 className='text-[2.2rem] lg:text-start text-center leading-[2.6rem]  font-bold'>SBIGFL provides Domestic and Export Factoring services under one roof </h1>
                <div className='bg-[#F9FAFB] relative  border-blue-500   mt-7 rounded-md'>
                    <div className=' flex mb-1  pt-4 px-4 items-center gap-2'>
                        <i className="ri-car-line text-xl"></i>
                        <h3 className='text-xl font-bold'>For Exporter</h3>
                    </div>
                    <p className='text-md pb-4 px-4 text-slate-500 font-semibold'>Sells the term you want with your suppliers. Leverage our supply chain management services to pay them immedietly</p>
                    <hr  className='w-[80%] absolute bottom-0 bg-gradient-to-r from-cyan-200 to-blue-600  h-[3.4px]'/>
                </div>
                <div className='bg-[#F9FAFB] relative  border-blue-500   mt-7 rounded-md'>
                    <div className=' flex mb-1  pt-4 px-4 items-center gap-2'>
                        <i className="ri-car-line text-xl"></i>
                        <h3 className='text-xl font-bold'>For Impoter</h3>
                    </div>
                    <p className='text-md pb-4 px-4 text-slate-500 font-semibold'>Sells the term you want with your suppliers. Leverage our supply chain management services to pay them immedietly</p>
                    <hr  className='w-[80%] absolute bottom-0 bg-gradient-to-r from-cyan-200 to-blue-600  h-[3.4px]'/>
                </div>
                <div className='bg-[#F9FAFB] relative  border-blue-500   mt-7 rounded-md'>
                    <div className=' flex mb-1  pt-4 px-4 items-center gap-2'>
                        <i className="ri-car-line text-xl"></i>
                        <h3 className='text-xl font-bold'>For Investor</h3>
                    </div>
                    <p className='text-md pb-4 px-4 text-slate-500 font-semibold'>Sells the term you want with your suppliers. Leverage our supply chain management services to pay them immedietly</p>
                    <hr  className='w-[80%] absolute bottom-0 bg-gradient-to-r from-cyan-200 to-blue-600  h-[3.4px]'/>
                </div>
            </div>
            <div className='lg:w-[40%] sm:w-[80%] w-[full]'>
                <img src="src/assets/home/newFinal.webp" alt="" />
            </div>
        </div>
    )
}

export default Import
