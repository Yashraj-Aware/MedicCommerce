import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import styles from '../components/cart.module.css'
import {useSelector,  useDispatch} from 'react-redux'
import { removeFromCart, decreaseCart, addToCart, clearCart, getCartTotal } from '../CartSlice'
const Cart = () => {
  const cartState = useSelector(state => state.cart)
  const dispatch  = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [cartState, dispatch])

  const handleClick = (item) => {
    dispatch(removeFromCart(item))
  }
  const handleDecrease = (item) => {
    dispatch(decreaseCart(item))
  }
  const handleIncrease = (item) => {
    dispatch(addToCart(item))
  }
  const handleClear = () => {
    dispatch(clearCart())
  }
  return (
    <div className={styles.cartContainer}>
      <h2>Shopping Cart</h2>
      {cartState.cartProducts.length === 0 ? (
        <div className={styles.cartEmpty}>
          <p>Your Cart is currently empty</p>
            <div className={styles.startShopping}>
              <Link to="/shop">
                <ArrowLeftIcon className='h-2 w-2' />
                <span>Start Shopping</span>

              </Link>
            </div>
        </div>
        
      ) : (
        <div>
          <div className={styles.titles}>
            <h3 className={styles.productTitle}>Product</h3>
            <h3 className={styles.price}>Price</h3>
            <h3 className={styles.quantity}>Quantity</h3>
            <h3 className={styles.total}>Total</h3>
          </div>

          <div className={styles.cartItems}>
            {cartState.cartProducts?.map(item => (
              <div className={styles.cartItem} key = {item._id}>
                <div className={styles.cartProduct}>
                  <img src={item.imgURL} alt={item.name} />
                  <div>
                  <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button onClick={() => handleClick(item)}>Remove</button>
                  </div>
                </div>
                <div className={styles.cartProductPrice}>{item.price}</div>
                <div className={styles.cartProductQuantity}>
                  <button onClick={() => handleDecrease(item)}>-</button>
                  <div className={styles.count}>{item.cartQuantity}</div>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
                <div className={styles.cartProductTotalPrice}>₹{item.price * item.cartQuantity}</div>
              </div>
            ))}
          </div>
              <div className={styles.cartSummary}>
                <button onClick = {() => handleClear()} className={styles.clearCart}>Clear Cart</button>
                <div className={styles.cartCheckout}>
                  <div className={styles.subtotal}>
                    <span>Subtotal</span>
                    <span className={styles.amount}>₹{cartState.cartAmount}</span>
                  </div>
                  <p>Taxes and Shipping at Checkout page</p>
                  <button>Checkout</button>
                  <div className={styles.continueShopping}>
              <Link to="/shop">
                <ArrowLeftIcon className='h-5 w-5'/>
                <span>Continue Shopping</span>

              </Link>
            </div>
                </div>
              </div>
        </div>
      )}
      
    </div>
  )
}

export default Cart
