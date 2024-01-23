import React from 'react'
import {useCart} from "../context/Context";
import { WishlistSingleProduct } from '../components/WishlistSingleProduct';
const Wishlist = () => {
  const {cartState:{wishlist}} = useCart();
  console.log({wishlist});
  return (
    <div className="flex-column align-center">
      {
        wishlist.length === 0 && <h2>Wishlist is empty!</h2>
      }
      {
        wishlist.length > 0 && wishlist.map((wishprd)=>{
          return(
            <WishlistSingleProduct product={wishprd}/>
          )
        })
      }
    </div>
  )
}

export default Wishlist