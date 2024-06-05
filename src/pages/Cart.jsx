import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { incrementQuantity, decrementQuantity, removefromcart } from '../redux/cart'
import { Link } from 'react-router-dom'

function Cart() {
    const cartlist = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    return (
        <>
            <section className='favoriteSection'>
                <div className="container">
                    <p className='navtitle'>Home /<b> Cart</b></p>

                    {/*  */}
                    {cartlist.cartList.length === 0 ? <p className='notadded'>Add items to cart</p> :
                     <>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartlist.cartList.map((values, key) => (
                                    <tr>
                                        <th scope="row" className='imgtitle'>
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="imagecontain">
                                                        <img width="50px" src={values.image} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 productnamecol">
                                                    <p>{values.title}</p>
                                                </div>
                                            </div>
                                        </th>
                                        <td>
                                            <p>${values.price}</p>
                                        </td>
                                        <td>
                                            <p>
                                                <button onClick={() => { dispatch(incrementQuantity(values.id)) }} className='btn btn-dark incbtn'>+</button>
                                                <span className='itemcount'>{values.count}</span>
                                                <button onClick={() => { dispatch(decrementQuantity(values.id)) }} className='btn btn-dark decbtn'>-</button>
                                            </p>
                                        </td>
                                        <td>
                                            <p>{values.totalprice}</p>
                                        </td>
                                        <td>
                                            <button onClick={() => { dispatch(removefromcart(values.id)) }} className='btn btn-danger'>Remove</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        <div className="conatiner-fluid">
                        <div className="row">
                            <div className="col">

                            </div>
                            <div className="col">
                                <div className="container totalcontainer">
                                    <div className="row checkoutrow">
                                        <div className="col">
                                            <h3>Grand Total:</h3>
                                        </div>
                                        <div className="col">
                                            <h1>{cartlist.grandtotal} $</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3">
                                           <Link to='/checkout'><button type="button" className="btn btn-primary morebutton">Check Out</button></Link> 
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                   </>
                        }
                    



                </div>
            </section>
        </>
    )
}

export default Cart