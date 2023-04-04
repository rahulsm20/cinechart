import React from 'react'
import SignupForm from './SignupForm'
import '../index.css'
const Signup = () => {
  return (
    <div className='text-center align-items-center justify-content-center'>
    <h1 className='m-5 text-white'>Join
    <img src='/public/large_cinechart_0.png'/>
    <span className='cinechart'>cinechart</span> today!</h1>
    <p className='text-white intro'> Interact with your friends, discuss and share your opinions on the hottest new TV shows and movies. </p>
    <SignupForm/>
   </div>
  )
}

export default Signup
