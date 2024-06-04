import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cartlist = useSelector((state) => state.cart)
    return (
        <>
            <section className='favoriteSection'>
                <div className="container">
                    <p className='navtitle'>Home /<b> Cart</b></p>

                    <div className="container innercontainertitle">
                        <div className="row">
                            <div className="col"><p><b>Product</b></p></div>
                            <div className="col"><p><b>Price</b></p></div>
                            <div className="col"><p><b>Quantity</b></p></div>
                            <div className="col"><p><b></b></p></div>
                        </div>
                    </div>
                    <div className="container cartcontainer">
                        {cartlist.cartList.map((values, key) => (
                            <div className="container innercontain" key={key}>
                                <div className="row">
                                    <div className="col">
                                        <div className="row">
                                            <div className="col">
                                                 <div className="imagecontain">
                                        <img width="50px" src={values.image} alt="" />
                                        </div>
                                            </div>
                                            <div className="col productnamecol">
                                            <p>{values.title}</p>
                                            </div>
                                        </div>
                                       
                                       
                                       
                                    </div>
                                    <div className="col"><p>${values.price}</p></div>
                                    <div className="col"><p>Quantity</p></div>
                                    <div className="col"><p>-</p></div>
                                </div>
                            </div>

                        ))}


                    </div>


                </div>
            </section>
        </>
    )
}

export default Cart