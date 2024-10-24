import React from 'react'

const Button = ({name,image}) => {
  return (
    <div className='bg-white rounded-full text-sm flex items-center px-3 sm:gap-3 py-[.4rem] md:py-[.2rem]'>
         {image && <img className='md:w-7 w-5 h-5 md:h-7' src={image} alt="" />}
        <button className='text-zinc-700 text-sm font-semibold'>{name}</button>
    </div>
  )
}

export default Button