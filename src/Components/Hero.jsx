import React from 'react';

const Hero = () => {
    return (
        <div className="bg-[url('src/assets/home/homeBanner.webp')] mt-3 bg-cover   w-full h-[55vh] md:h-[65vh] relative">
            <div className="max-w-[1180px] mx-auto flex items-center justify-between h-full px-8 relative">
                <div className="w-1/2  text-white z-10 relative">
                    <h1 className='lg:text-[3.5rem]  md:text-[3rem] sm:text-[2.7rem] text-[2.3rem] leading-[40px] sm:leading-[55px] lg:leading-[65px] font-semibold'>A subsidiary of State Bank of India</h1>
                </div>
                <div className="w-1/2 relative  h-full flex items-center justify-center">
                    <div className='absolute'>
                        <img
                            className="relative lg:left-16 md:left-12 left-4  w-[95%]"
                            src="src/assets/home/SBIImage.webp"
                            alt="SBI Circle"
                        />
                        <div className='absolute  md:top-16 sm:top-12 md:left-4 sm:-left-8 -left-24 top-8 '>
                                <div className='relative left-24 bg-white rounded-full p-[5px]'>
                                   <img className='w-8' src="src/assets/home/bnIcon1.webp" alt="" />
                                </div>
                                <div className='relative -top-8 left-48 bg-white flex rounded-full justify-center p-[8px]'>
                                   <img className='w-6 ' src="src/assets/home/bnIcon3.webp" alt="" />
                                </div>
                                
                                <div className='relative top-7 left-24 bg-white flex rounded-full justify-center p-[8px]'>
                                   <img className='w-6 ' src="src/assets/home/bnIcon2.webp" alt="" />
                                </div>
                                <div className='relative top-6 left-[14.6rem] bg-white flex rounded-full justify-center p-[8px]'>
                                   <img className='w-6 ' src="src/assets/home/bnIcon4.webp" alt="" />
                                </div>
                                <div className='relative bottom-44 left-[17rem] bg-white flex rounded-full justify-center p-[8px]'>
                                <img className='w-5 ' src="src/assets/home/bnIcon5.webp" alt="" />
                                </div>
                        </div>
                    </div>
                     <img
                        className="absolute bottom-16 right-2 w-[40%]  z-20"
                        src="src/assets/home/BanneRight.webp"
                        alt="Right Banner" />
                </div>
            </div>
        </div>
    );
};

export default Hero;