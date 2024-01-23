import React from 'react'
import { useCart } from '../context/Context'
import Rating from './Rating'

export const WishlistSingleProduct = ({ product, id }) => {
    const { cartState: { cart, wishlist }, cartDispatch } = useCart();
    return (
        <div className="card card-horizontal card-wishlist">
            <div className="card-image-horizontal">
                <img className="img-responsive img-hrz" src={product.image} loading="lazy"
                    alt="product" />
            </div>
            <div className="card-description flex-column justify-around">
                <div className="gutter-vh-sm">
                    <p className="card-title">{product.name} </p>
                    <p> MRP : <del>{product.mrp} Rs</del></p>
                    <p>Price : Rs. {product.price}</p>
                    <p>Rating : <Rating rating={product.rating} /></p>
                </div>
                <div className="card-btn-panel flex-row align-center justify-between">
                    {
                        wishlist.some(p => p.id === product.id) ?
                            (
                                <i onClick={() => {
                                    cartDispatch({
                                        type: "REMOVE_FROM_WISHLIST",
                                        payload: product
                                    })
                                }}
                                    className="fas fa-heart text-lg-size fa-heart-filled" title="Remove from wishlist"></i>
                            ) : (
                                <i onClick={() => {
                                    cartDispatch({
                                        type: "ADD_TO_WISHLIST",
                                        payload: product
                                    })
                                }}
                                    className="fas fa-heart text-lg-size" title="Add to wishlist"></i>
                            )
                    }
                    {cart.some(p => p.id === product.id) ?
                        (
                            <button onClick={() => {
                                cartDispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: product
                                })
                            }} className="btn btn-primary-outline btn-rmc">
                                <span className="text-ms-size"> Remove from Cart</span>
                            </button>
                        )
                        :
                        (
                            <button onClick={() => {
                                cartDispatch({
                                    type: "ADD_TO_CART",
                                    payload: product
                                })
                            }} className="btn btn-primary-outline btn-atc">
                                <span><i className="fas fa-shopping-cart"></i></span>
                                <span className="text-ms-size"> Add To Cart</span>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
