import React from 'react'
// import logimg from '../images/pexels-pixabay-237272.jpg'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
    <section className='loginsection'>
    <div className="container-fluid">
      <div className="row loginrow">
        
        <div className="col-sm-6 imgcol">
          
        </div>
        <div className="col-sm-6">
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
            <div className="mb-3 text-center">
              <p>Already have account? <u><Link>Login</Link></u></p>
            </div>



          </div>
        </div>
      </div>
      </div>
      </section>
    </>
  )
}

export default Signup