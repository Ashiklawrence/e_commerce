import React from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearCart } from '../redux/cart'

function Checkout() {
    const cart = useSelector((state) => (state.cart))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function placeOrder(e){
       
        Swal.fire({
            title: "Order Placed",
            text: "Congrats !",
            icon: "success",
          })
          dispatch(clearCart())
          navigate('/')         
    }
    return (
        <>
            <p className='navtitle'>Home / Checkout /<b> Favorites</b></p>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Billing Details</h3>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Name<span className='redmark'>*</span></label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Company Name</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Street Address<span className='redmark'>*</span></label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Apartment,floor,etc.(optional)</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Town/City<span className='redmark'>*</span></label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="tel" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Phone Number<span className='redmark'>*</span></label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control loginput" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address<span className='redmark'>*</span></label>
                        </div>
                    </div>
                    <div className="col">
                        <table>
                            {cart.cartList.map((values, key) => (
                                <>
                                    <tr>
                                        <td>
                                            <div className="row" key={key}>
                                                <div className="col-sm-3">
                                                    <div className="imagecontain">
                                                        <img width="50px" src={values.image} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 productnamecol">
                                                    <p>{values.title}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{values.totalprice}</p>
                                        </td>
                                    </tr>
                                </>
                            ))}
                            <tr>
                                <td>
                                    <div className="row checktotalrow">
                                        <div className="col"></div>
                                        <div className="col mt-2">
                                            <h3>Total</h3>
                                        </div>
                                        <div className="col">
                                            <h1 className='text-danger'>${cart.grandtotal}</h1>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>

                                    <div class="form-check ms-5">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Bank
                                        </label>
                                    </div>
                                    <div class="form-check ms-5">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Cash on delivery
                                        </label>
                                    </div>


                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="placeorderbtn">
                                        <button type="button" class="btn btn-primary loginbtn" onClick={(e)=>placeOrder()}>Place Order</button>
                                    </div>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout