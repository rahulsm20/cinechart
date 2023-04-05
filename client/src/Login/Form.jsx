import React, { useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'
const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const handleForm = event => {
    // if(username=='username'&& password=='password345')
    // localStorage.setItem('Username',JSON.stringify(username))
    // localStorage.setItem('Password',JSON.stringify(password))
    navigate('/home')
    console.log('Login successful')
    event.preventDefault();
  };
  useEffect(() => {
    localStorage.setItem('Username',username)
    localStorage.setItem('Password',password)
    console.log(localStorage)
    // localStorage.clear()
  },[username,password]);
  
  return (
    <div
      id="login-form"
      className="card col-lg-5 d-flex align-items-center justify-content-center text-white form-control"
    >
      <form onSubmit={handleForm}>
        <h4 className="text-white">Login to your account</h4>
        <hr />
        <div className="d-flex flex-column">
          <input
            placeholder="Username"
            value={username}
            onChange={event=>setUsername(event.target.value)}
            className="text-center p-2 m-3 input-fields"
            required
          />
          <input
            placeholder="Password"
            value={password}
            onChange={event=>setPassword(event.target.value)}
            type="password"
            className="text-center p-2 m-3 input-fields"
            required
          />
          <button className="btn bg-dark p-2 mx-5 login-button text-white" type="submit">
            Login
            <i className="bi bi-arrow-right-circle mx-1"></i>
          </button>
        </div>
      </form>
      <span className="my-2">Don't have an account?</span>
      <a className="text-primary text-decoration-none" href="/signup">
        <b>Sign up here</b>
      </a>
    </div>
  );
};

export default Form;
