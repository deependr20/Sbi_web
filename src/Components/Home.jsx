import React from 'react'
import Hero from './Hero'
import Import from './Import'
import Products from './Products'
import Blog from './Blog'

const Home = () => {
  return (
    <div className='w-full h-full'>
        <Hero />
        <Products />
        <Import />
        <Blog />
    </div>
  )
}

export default Home