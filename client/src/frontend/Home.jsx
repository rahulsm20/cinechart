import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <p className='popular p-4 my-5 text-white'>
        Popular movies right now
        </p>
        <Card/>        
    </div>
  )
}

export default Home