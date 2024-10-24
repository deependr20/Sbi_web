import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [visible, setvisible] = useState(false)
  return (
        <div className='max-w-[1200px] px-8 md:px-0 mx-auto  pt-5'>
                <div className='flex items-center gap-5 text-base lg:px-8 xl:px-0 px-8  justify-between   font-semibold'>
                    <img className='md:w-[18%] h-[35%] w-[35%]  md:h-[18%] object-cover' src="src/assets/home/sbi-logo.webp" alt="" />
                    <div className='xl:flex px gap-7 hidden text-gray-600 items-center'>
                            <Link to={"/"} className='hover:text-blue-300 text-gray-700 font-bold' href="">Home</Link>
                            <Link to={"/about"}  className='hover:text-blue-300' href="">About</Link>
                            <Link className='hover:text-blue-300' href="">Prducts <i class="ri-arrow-down-s-line"></i></Link>
                            <Link className='hover:text-blue-300' href="">Services <i class="ri-arrow-down-s-line"></i></Link>
                            <Link className='hover:text-blue-300' href="">Career</Link>
                            <Link className='hover:text-blue-300' href="">FAQ's</Link>
                            <Link className='hover:text-blue-300' href="">Event & BLogs</Link>
                            <Link className='hover:text-blue-300' href="">Downloads</Link>
                            <Link className='
                            hover:text-blue-300' href="">Teams</Link>
                            <button className='bg-[#20CAFD] text-white rounded-full  py-2 px-4'>Contact Us <i class="ri-arrow-right-up-line"></i></button>
                    </div>
                    <div className='xl:hidden  flex'>
                    <i onClick={()=> setvisible(prev=> !prev)} className="ri-menu-line text-3xl"></i>
                    </div>
                      <div className={`absolute top-0 right-0 bottom-0 z-50 flex xl:hidden overflow-hidden bg-white transition-all duration-500 ${visible ? "w-full" : "w-0"} `}>
                          <div className="flex flex-col w-full text-gray-600 ">
                              <div onClick={() => setvisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                                
                                <p className="text-lg text-gray-600">Back</p>
                              </div>
                                <NavLink onClick={() => setvisible(false)} to={"/"} className={(e) => e.isActive ? "border pl-6 py-2 xl:bg-none bg-black xl:text-black text-white" : "border pl-6 py-2 "}>Home</NavLink>
                                <NavLink onClick={() => setvisible(false)} to={"/about"} className={(e) => e.isActive ? "border pl-6 py-2 xl:bg-none bg-black xl:text-black text-white" : "border pl-6 py-2 "}>About</NavLink>
                                <NavLink onClick={() => setvisible(false)} to={"/services"} className={(e) => e.isActive ? "border pl-6 py-2 xl:bg-none bg-black xl:text-black text-white" : "border pl-6 py-2 "}>Prducts</NavLink>
                                <NavLink onClick={() => setvisible(false)} to={"/Career"} className={(e) => e.isActive ? "border pl-6 py-2 xl:bg-none bg-black xl:text-black text-white" : "border pl-6 py-2 "}>Services</NavLink>
                                <NavLink onClick={() => setvisible(false)} to={"/faq"} className={(e) => e.isActive ? "border pl-6 py-2 xl:bg-none bg-black xl:text-black text-white" : "border pl-6 py-2 "}>FAQ,s</NavLink>
                                <NavLink onClick={() => setvisible(false)} to={"/blogs"} className={(e) => e.isActive ? "border pl-6 py-2 xl:bg-none bg-black xl:text-black text-white" : "border pl-6 py-2 "}>Events and </NavLink>
                                <NavLink onClick={() => setvisible(false)} to={"/download"} className={(e) => e.isActive ? "border pl-6 py-2 xl:bg-none bg-black xl:text-black text-white" : "border pl-6 py-2 "}>Downloads</NavLink>
                                <NavLink onClick={() => setvisible(false)} to={"/teams"} className={(e) => e.isActive ? "border pl-6 py-2 xl:bg-none bg-black xl:text-black text-white" : "border pl-6 py-2 "}>Teams</NavLink>
                            </div>
                          </div>
                      </div>
            </div>
  )
}

export default Navbar
