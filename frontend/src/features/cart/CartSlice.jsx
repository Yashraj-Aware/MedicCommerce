import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast'
import {  useSelector } from "react-redux";

// const {user} = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : 0
const initialState = {
  cartProducts: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  cartTotalQuantity: 0,
  cartAmount: 0,
  userId: 0
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // to see if we have item in cart --> (0, inf); (-1 404)
      const itemIndex = state.cartProducts.findIndex(
        (item) => item._id === action.payload._id
        );
        
      // console.log(user);
      
      // state.userId = user._id

      // if(state.userId !== 0)
      // {

        if (itemIndex >= 0) {
          state.cartProducts[itemIndex].cartQuantity += 1;
  
          toast.success(`${action.payload.name} quantity increased`)
        } else {
          const varProduct = { ...action.payload, cartQuantity: 1 };
          state.cartProducts.push(varProduct) ;
          toast.success(`${action.payload.name} added to cart`)
          // convert into object string
        }
        localStorage.setItem('cart', JSON.stringify(state.cartProducts))
      // }

    },
    removeFromCart(state, action){
      const cartItems = state.cartProducts.filter(cartItem => cartItem._id !== action.payload._id)
      state.cartProducts = cartItems
      localStorage.setItem("cart", JSON.stringify(state.cartProducts))
      toast.error(`${action.payload.name} removed from cart`)
    },
    decreaseCart(state,action){
      const index = state.cartProducts.findIndex(cartItem => cartItem._id === action.payload._id)
      if(state.cartProducts[index].cartQuantity > 1)
      {
        state.cartProducts[index].cartQuantity -= 1
        toast.error(`${action.payload.name} decreased from cart`)

      }
      else if(state.cartProducts[index].cartQuantity === 1)
      {
        const cartItems = state.cartProducts.filter(cartItem => cartItem._id !== action.payload._id)
        state.cartProducts = cartItems
        toast.error(`${action.payload.name} removed from cart`)
      }
      localStorage.setItem("cart", JSON.stringify(state.cartProducts))
    },
    clearCart(state,action){
      state.cartProducts = []
      toast.error('Cart cleared')
      localStorage.setItem("cart", JSON.stringify(state.cartProducts))
    },
    getCartTotal(state,action){
      let {total , quantity} = state.cartProducts.reduce(
        (cartTotal , cartItem) => {
          const {price , cartQuantity} = cartItem
          const itemTotal = price * cartQuantity

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total : 0,
          quantity : 0
        }

        )
        state.cartTotalQuantity = quantity
        state.cartAmount = total
    }
  },
  
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getCartTotal } = CartSlice.actions;

export default CartSlice.reducer;
