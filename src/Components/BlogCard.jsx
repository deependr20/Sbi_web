import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ img, category, title, description, link }) => {
    return (
        <div className=" bg-white h-full border border-gray-200 rounded-lg shadow flex flex-col justify-between">
             <div className='lg:h-[16rem]'>
                  <img className="object-cover rounded-t-lg  w-full overflow-hidden h-full" src={img} alt="" />
            </div>
            <div className="px-4  py-4">
                <div className='flex gap-4  items-center mb-4'>
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-[.5rem] text-center ">
                        {category}
                    </button>
                    <h3 className='font-semibold'>June 21, 2024</h3>
                </div>
                <h3 className="mb-2 text-[1.30rem] leading-[1.75rem] text-slate-800 font-semibold tracking-tight">{title}</h3>
                <p className=" font-medium text-sm text-gray-800">{description}</p>
            </div>
            <div className="flex items-center text-blue-700 text pb-4 gap-4">
               <Link   className= "pl-4 hover:underline  font-medium rounded-lg text-sm">Read more</Link>
                <div className='bg-white w-6 h-6 flex items-center justify-center rounded-full border border-blue-300'>
                    <i class="ri-arrow-right-line"></i>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
