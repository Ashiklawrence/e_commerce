import React from 'react'
import { Outlet } from 'react-router-dom'
import {NavLink } from 'react-router-dom'
// import {NavbarCollapse} from 'react-bootstrap'
import 'react-bootstrap/NavbarCollapse/package.json'
import { useSelector } from 'react-redux'

function Navbar() {
    const favorites = useSelector((state)=>state.favorites)
    return (
        <div>
            <>
                <nav class="navbar navbar-expand-lg navbar-light bg-light" id='navbr'>
                    <h5 className='navbar-brand ms-auto'>Exclusive</h5>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mx-auto justify-content-center">
                            <li className="nav-item">
                                <NavLink className={({isActive})=>[isActive?"nav-link active activelink":"nav-link"]} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>[isActive?"nav-link active activelink":"nav-link"]} to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>[isActive?"nav-link active activelink":"nav-link"]} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive})=>[isActive?"nav-link active activelink":"nav-link"]} to="/signup">Sign Up</NavLink>
                            </li>
                            
                        </ul>
                        <form class="d-flex">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-dark" type="submit">Search</button> */}
                            
                          
                             <NavLink to="/favorites"><i className="lni lni-heart heartfav">{favorites.favoriteList.length===0?<div className="whitedot"></div>:<div className="reddot"></div>}</i></NavLink>
                             <NavLink to="/cart"><i class="lni lni-cart heartfav"></i></NavLink>
                             {/* <img className='profileImagenav' src=" https://img.icons8.com/?size=100&id=85050&format=png&color=000000" alt="" /> */}
                        </form>
                    </div>
                </nav>

                <Outlet />
            </>
        </div>

    )
}

export default Navbar