import React, { useState } from 'react'
// import logimg from '../images/pexels-pixabay-237272.jpg'
import {Link} from 'react-router-dom'
import Register from '../Components/Register'
import Login from '../Components/Login'

function Signup() {
  const [login, setLogin] = useState(true)
  function handleClick(e){
    e.preventDefault()
    login?setLogin(false):setLogin(true)
  }
  return (
    <>
      <section className='loginsection'>
        <div className="container-fluid">
          <div className="row loginrow">

            <div className="col-sm-6 imgcol">

            </div>
            <div className="col-sm-6">
              {login ? <Login></Login> : <Register></Register>}
              <div className="mb-3 text-center align-center">
              {login?<p>Dont have an account? <u><Link onClick={(e)=>{handleClick(e)}}>Register</Link></u></p>:<p>Already have account? <u><Link onClick={(e)=>{handleClick(e)}}>Login</Link></u></p>}
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Signup