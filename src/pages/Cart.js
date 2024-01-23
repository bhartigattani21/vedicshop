import React, { useEffect, useState } from 'react'
import { SingleCartItem } from '../components/SingleCartItem';
import { useCart } from '../context/Context'

const Cart = () => {
  const { cartState: { cart }, cartDispatch } = useCart();
  const [total, setTotal] = useState(0);
  const [isShowSnackbar, setIsShowSnackbar] = useState(false);
  const displaySnackbar = () =>{
    setIsShowSnackbar(true);
    setTimeout(()=>{
      setIsShowSnackbar(false);
    },3000);
  }
useEffect(() => {
  setTotal(cart.reduce((acc, cur) => acc + Number((cur.price) * cur.qty), 0))
}, [cart]);
console.log(total);
return (
  <div className="flex-row">
    <div className="cart-product-container">
      {cart.length > 0 && cart.map((prd) => {
        return <>
          <SingleCartItem product={prd} />
        </>
      })}
    </div>
    <div className="cart-summary">
      <h4>Subtotal ( {cart.length} ) items</h4>
      <h5> Total : Rs. {total}</h5>
      <button className="btn btn-primary-solid btn-chkout text-md-size"
      disabled={cart.length===0 ? true : false}
        onClick={() => {
          cartDispatch({
            type: "PROCEED_TO_CHECKOUT"
          })
          displaySnackbar();
        }}
      >Proceed To CheckOut</button>
    </div>
    {
      isShowSnackbar && <div className="snackbar text-md-size primary-snackbar" id="primary-snackbar">
        Order Placed <i className="fas fa-check-circle component-icons"></i>
      </div>
    }
  </div>
)
}

export default Cart