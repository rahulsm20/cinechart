import React from "react";

const Form = () => {
  return (
    <div
      id="login-form"
      className="card col-5 py-5 h-100 d-flex align-items-center justify-content-center text-white"
    >
      <form>
        <h4 className="text-white">Login to your account</h4>
        <hr />
        <div className="d-flex flex-column">
          <input
            placeholder="Username"
            className="text-center p-2 m-3 input-fields"
          ></input>
          <input
            placeholder="Password"
            className="text-center p-2 m-3 input-fields"
          ></input>
          <button className="btn bg-dark p-2 mx-5 login-button text-white">Login
          <i class="bi bi-arrow-right-circle mx-1"></i></button>
        </div>
      </form>
      <span className="my-2">Don't have an account?</span>
      <a className="text-primary text-decoration-none" href="/signup">
       <b>
        Sign up here
        </b> 
      </a>
    </div>
  );
};

export default Form;
