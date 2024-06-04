import React from 'react';
import {Link} from 'react-router-dom';

function Login({props}) {
  return (
   <>
       <div className="container logincontainer">
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>
            <div class="form-floating mb-3">
              <input type="email" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control loginput" id="floatingPassword" placeholder="Password" />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="mb-3">
              <button type="button" class="btn btn-primary loginbtn">Login</button>
            </div>
            <div className="mb-3 text-center">
            <p><u><Link>Forgot Password?</Link></u></p>
            </div>
           



          </div>
   </>
  )
}

export default Login