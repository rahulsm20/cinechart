import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleForm = event => {
    console.log("Form submitted");
    event.preventDefault();
  };
  return (
    <div
      id="login-form"
      className="card col-5 py-5 h-100 d-flex align-items-center justify-content-center text-white form-control"
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
