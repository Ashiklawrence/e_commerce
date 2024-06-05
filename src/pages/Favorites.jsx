import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {removefromfav} from '../redux/favorites'
import { removefromcart } from '../redux/cart'
import { addtocart } from '../redux/cart'

function Favorites() {
    const favorites = useSelector((state)=>state.favorites)
    const cart = useSelector((state)=>state.cart)
    const dispatch = useDispatch()
    console.log(favorites,'LIStes')
  return (
    <>
    <section className='favoriteSection'>
    <div className="container-fluid productscontainer">
    <p className='navtitle'>Home /<b> Favorites</b></p>
                <div className="row">
                    {favorites.favoriteList.length===0? <p className='notadded'>No favorites added</p>:<>
                        {favorites.favoriteList.map((values,key)=>(
                    <div className="col-md-3" key={key}>
                        <div className="card">
                            <div className="image-container">
                                <div className="first">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className={favorites.favoriteList.find((obj)=>obj.id===values.id)?"wishlist heartclicked":"wishlist"} onClick={()=>{dispatch(removefromfav(values.id))}}><i className="fa fa-heart-o"></i></span>
                                    </div>
                                </div>
                                <img src={values.image} className="img-fluid rounded thumbnail-image" alt='' />
                            </div>
                            <div className="product-detail-container p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="dress-name">{values.title}</h5>
                                    <div className="d-flex flex-column mb-2">
                                        <span className="new-price">${values.price}</span>
                                    </div>
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
                    </>}
                    
                </div>
               
            </div>
    </section>
    
    </>
  )
}

export default Favorites