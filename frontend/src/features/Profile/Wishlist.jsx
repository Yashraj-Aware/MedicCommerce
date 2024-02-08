
import React, {} from 'react'

import styles from './cart.module.css'
import { addToWishlist, afterAddRemove } from './WishlistSlice'
import {addToCart} from '../cart/CartSlice'
import {useSelector, useDispatch} from 'react-redux'


const Wishlist = () => {
  const wishlistState = useSelector(state => state.wishlist)
  const dispatch = useDispatch()

  dispatch(addToWishlist)

  const handleClick = (item) => {
    dispatch(addToCart(item));
    dispatch(afterAddRemove(item))
  }


  





  return (
    <main className="mx-auto max-w-7xl ">
      <div className="flex items-baseline justify-between border-b border-gray-200 pb-12 pt-24 bg-[#c7dde8]">
        <h1 className="sm:text-4xl lg:text-4xl ml-7 mb-7 font-bold tracking-tight text-gray-900 ">
          Wishlist
        </h1>
      </div>

      <div className={styles.cartContainer}>

      <div className={styles.titles}>
            <h3 className={styles.productTitle}>Product</h3>
            <h3 className={styles.price}>Price</h3>
            <h3 className={styles.quantity}>Product Status</h3>
            <h3 className={styles.total}>Action</h3>
          </div>

          <div className={styles.cartItems}>
            {wishlistState.wishlistProducts?.map(item => (
              <div className={styles.cartItem} key = {item._id}>
                <div className={styles.cartProduct}>
                  <img src={item.imgURL} alt={item.name} />
                  <div>
                  <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button >Remove</button>
                  </div>
                </div>
                <div className={styles.cartProductPrice}>{item.price}</div>
                <div className={styles.cartProductQuantity}>
                  {/* <button >-</button>
                  <div className={styles.count}>{item.cartQuantity}</div>
                  <button >+</button> */}
                  <span>In Stock</span>
                </div>
                <div className={styles.cartProductTotalPrice}>
                  <button onClick = {() => handleClick(item)}className='bg-black text-white p-3 hover:bg-emerald-600' >Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
      </div>

    </main>
  )
}

export default Wishlist
