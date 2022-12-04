import React from 'react'
import Form from './Form'
import './login.css'
const Login = () => {
  return (
    <div className='text-center align-items-center justify-content-center'>
        <h1 className='m-5 text-white'>Welcome to 
        <img src='../../public/large_cinechart_0.png'/>
        <span className='cinechart'>cinechart</span>!</h1>
        <p className='text-white intro'> The internet's favorite way to keep track of movies and TV shows</p>
        <Form/>
    </div>
  )
}

export default Login