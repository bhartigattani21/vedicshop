import React from 'react'
import { useCart } from '../context/Context'
import Rating from './Rating'

export const SingleProduct = ({ product, id }) => {
    const { cartState: { cart, wishlist }, cartDispatch } = useCart();
    return (
        <div className="card card-vertical card-vertical-thin" key={id}>
            <div className="card-image-vertical">
                <img className="img-responsive" src={product.image} loading="lazy"
                    alt="product" />
            </div>
            <div className="card-description flex-column justify-around padder-hz-sm">
                <div className="description-1">
                    <p className="card-title">{product.name}</p>
                    <p>MRP : <del>Rs. {product.mrp}</del></p>
                    <p> Price : Rs. {product.price} </p>
                    {
                        product.inStock === 0 ? (
                            <p style={{color:"red"}}>Out Of Stock</p>
                        ) : (
                            <p> Stock : {product.inStock} Pcs. </p>
                        )
                    }
                    <p>Delivery : {product.fastDelivery === true ? "Fast Delivery" : "4 Days Delivery"}</p>
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
                            }}
                                disabled={product.inStock === 0 ? true : false}
                                className="btn btn-primary-outline btn-atc">
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
