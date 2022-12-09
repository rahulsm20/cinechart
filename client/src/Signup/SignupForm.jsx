import React from 'react'

const SignupForm = () => {
  return (
    <div>
       <div
    id="login-form"
    className="card col-5 py-5 h-100 d-flex align-items-center justify-content-center text-white form-control"
  >
    <form>
      <h4 className="text-white">Create your account</h4>
      <hr />
      <div className="d-flex flex-column">
        <input
          placeholder="Username"
          className="text-center p-2 m-3 input-fields"
          required
        />
        <input
          placeholder="Password"
          type="password"
          className="text-center p-2 m-3 input-fields"
          required
        />
        <input
          placeholder="Confirm password"
          type="password"
          className="text-center p-2 m-3 input-fields"
          required
        />
        <input
          placeholder="Email address"
          type="email"
          className="text-center p-2 m-3 input-fields"
          required
        />
        <button className="btn bg-dark p-2 mx-5 login-button text-white">Signup
        <i className="bi bi-arrow-right-circle mx-1"></i></button>
      </div>
    </form>
  </div>
    </div>
  )
}

export default SignupForm
