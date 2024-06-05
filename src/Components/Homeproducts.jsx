import React from 'react'
import Clock from 'react-live-clock';
import { useDispatch } from 'react-redux';
import { addtofav, removefromfav } from '../redux/favorites';
import {addtocart,removefromcart} from '../redux/cart'
import { useSelector } from 'react-redux';
import gif1 from '../images/Iphone-spinner-2.gif'

function Homeproducts({props}) {
    const {isloading,productList} = props
    const favorites = useSelector((state) => state.favorites)
    const cart = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    const newList = [...productList].sort((a,b)=>(b.rating.rate-a.rating.rate))

    return (
        <>
            <div className="container-fluid">
                {/* <div className="orangebox"></div> */}
                <p className="section2head">Todays</p>
                <div className="row">
                    <div className="col-sm-4">
                        <h1 className="flashsalestime">Flash Sales</h1>
                    </div>
                    <div className="col-sm-4 text-center">
                        {/* <h1>03:23:19:56</h1> */}
                        <h1><Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Colombo'} /></h1>
                    </div>
                </div>

            </div>
            {isloading ? <div className='container align-center loadercontain'><img className='loader' src={gif1} alt="" /></div> : <div className="container-fluid productscontainer">
                <div className="row">
                    {newList?.map((values, key) => (
                        <div className="col-md-2 mt-3" key={key}>
                            <div className="card">
                                <div className="image-container">
                                    <div className="first">
                                        <div className="d-flex justify-content-between align-items-center">
                                            {favorites.favoriteList.find((obj) => obj.id === values.id) ? <span className='wishlist heartclicked' onClick={() => { dispatch(removefromfav(values.id)) }}><i className="fa fa-heart-o"></i></span> : <span className='wishlist' onClick={() => { dispatch(addtofav(values)) }}><i className="fa fa-heart-o"></i></span>}
                                        </div>
                                    </div>
                                    <img src={values.image} className="img-fluid rounded thumbnail-image" alt='' />
                                </div>
                                <div className="product-detail-container p-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="dress-name">{values.title}</h5>
                                        <div className="d-flex flex-column mb-2">
                                            <span className="new-price">{values.price}</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center pt-1">
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center pt-1">
                                        <div>
                                            <i className="fa fa-star-o rating-star"></i>
                                            <span className="rating-number">{values.rating.rate}</span>
                                        </div>
                                        {cart.cartList.find((obj)=>obj.id === values.id)?<span className="buy" onClick={()=>dispatch(removefromcart(values.id))}>REMOVE FROM CART+</span>:<span className="buy" onClick={()=>dispatch(addtocart(values))}>ADD TO CART+</span>}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>))}
                </div>
                <div className="row buttonrow">
                <div className="mb-3">
                    <button type="button" className="btn btn-primary morebutton">View All Products</button>
                </div>
            </div>
            </div>
            }


           

        </>
    )
}

export default Homeproducts