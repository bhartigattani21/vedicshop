import React from 'react'
import { Link } from 'react-router-dom';
import { images } from '../constants';
import { useCart } from '../context/Context';
import "./styles.css";
const Header = () => {
    const { cartState: { cart, wishlist } } = useCart();
    return (
        <>
            <div className="navigation full-width">
                <div className="nav-left logo flex-row">
                    <Link to="/" >
                        <h2 className="nav-logo gutter-hz-sm">VEDIC SHOP</h2>
                    </Link>
                    <Link to="/product-page" >
                        <button className="btn btn-primary-outline btn-shop">
                            Shop
                        </button>
                    </Link>
                </div>

                <div className="nav-right">
                    <Link to="/wishlist" className="icon-badge-container" >
                        <i className="fas fa-heart" title="wishlist"><span className="icon-badge">
                            {wishlist.length > 0 ? wishlist.length : 0}
                        </span></i>
                    </Link>
                    <Link to="/cart-page" className="icon-badge-container gutter-hz-sm" >
                        <i className="fas fa-shopping-cart" title="cart"><span className="icon-badge">
                            {cart.length > 0 ? cart.length : 0}
                        </span></i>
                    </Link>
                    <Link to="/profile">
                        <button className="btn btn-primary-outline text-rg-size">Profile</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header