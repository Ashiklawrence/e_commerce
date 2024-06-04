import React from 'react';

function Register() {
  return (
    
    <>
    <div className="container logincontainer">
            <h2>Create an account</h2>
            <p>Enter your details below</p>
            <div class="form-floating mb-3">
              <input type="text" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control loginput" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="mb-3">
              <button type="button" class="btn btn-primary loginbtn">Create Account</button>
            </div>
            <div className="mb-3">
              <button type="button" class="login-with-google-btn" >
                Sign in with Google
              </button>
            </div>
           



          </div>
    </>
  )
}

export default Register