import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const PayButton = ({cartItems}) => {
    const user = useSelector(state => state.auth.user.user)
    const handleClick = () => {
        // console.log(cartItems);
        console.log(user);
        axios.post('http://localhost:4000/api/v1/stripe/create-checkout-session', {
            cartItems,
            user: user._id
        }).then((res) => {
            if(res.data.url)
            {
                window.location.href = res.data.url
            }
        }).catch((error) => {
            console.log(error.message);
        })
    }
  return (
    <button onClick={() => handleClick()} className='bg-emerald-700'>Checkout</button>
  )
}

export default PayButton
