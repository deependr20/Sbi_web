import React from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const blogs = [
        {
            img: "src/assets/blog/blog1.webp",
            category: "Category",
            title: "The Game-Changing Benefits of Vendor Factoring for Suppliers",
            description: "Vendor factoring or accounts receivable factoring or debt factoring is a modern financing tool developed for suppliers confronting protracted",
            link: "#"
        },
        {
            img: "src/assets/blog/blog2.webp",
            category: "Category",
            title: "Receivables Financing: A Lifeline for Growing Businesses",
            description: "In today's fast-paced business environment, managing cash flow efficiently is crucial for the survival and growth of businesses. One effective....",
            link: "#"
        },
        {
            img: "src/assets/blog/blog3.webp",
            category: "Category",
            title: "Cash Credit vs. Term Loan: Understanding Key Differences and..",
            description: "The choice between cash credit or term credit remains one of the most closing intersections for money managers and business visionaries in the...",
            link: "#"
        }
    ];

    return (
        <div className="max-w-[1200px] mt-24  mx-auto">
            <div className='text-center'>
                <h1 className="text-5xl mb-2 text-green-800 text-center">Our Blogs</h1>
                <h2 class="text-base font-medium w-[80%] px-0 mx-auto text-center mt-5" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-start items-center px-8  lg:gap-3 gap-6 rounded-md mt-10">
                {blogs.map((blog, index) => (
                    <BlogCard 
                        key={index} 
                        img={blog.img} 
                        category={blog.category} 
                        title={blog.title} 
                        description={blog.description} 
                        link={blog.link} 
                    />
                ))}
            </div>
           <div className='flex justify-center'>
           <button type="button" className="mt-10  border hover:border-blue-400   font-medium text-gray-700 rounded-lg text-sm px-5 py-2.5 text-center  mb-2 ">
                See All
            </button>
           </div>
        </div>
    );
};

export default Blog;
