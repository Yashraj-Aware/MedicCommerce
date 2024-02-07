import React from 'react'
import { useEffect } from 'react'
import ReactStars from 'react-stars'

import {  useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../../../redux/getAllProductsSlicer'
import { addToCart } from '../../cart/CartSlice';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


const ItemList = () => {
      
      const dispatch = useDispatch()
      const navigate = useNavigate()
      const data = useSelector(state => state.getProducts)
      const {user} = useSelector(state => state.auth)
      console.log(data);

      useEffect(() => {
        dispatch(fetchAllProducts())
       
      }, [dispatch])
      
      const handleClick = (product) => {
        
        if(user)
        {

          dispatch(addToCart(product))
        }
        else{
          toast.error('You should be logged in first!!!')
          navigate('/login')

        }
      }
      
      // console.log(data);
  return (
    <div>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">

        {
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">

          {
             data?.isLoading ? <h3>Loading.....</h3> :
            data?.data.map((product) => (
             
            <div key={product._id} className="group relative border-solod border-2 p-2       ">
            {/* <div class="h-10 w-40 bg-gray-400 flex items-center justify-center overflow-hidden transition-all group-hover:overflow-visible">
      <button class="bg-green-500 text-white px-4 py-2 mx-1 transition-all transform translate-y-[-100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ">Button 1</button>
      <button class="bg-blue-500 text-white px-4 py-2 mx-1 transition-all transform translate-y-[-100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ">Button 2</button>
      <button class="bg-red-500 text-white px-4 py-2 mx-1 transition-all transform translate-y-[-100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ">Button 3</button>
    </div> */}
              
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 group-hover:overflow-visible lg:h-80">


                
                <img 
                  src={ 
                    // async function(){
                    //   const response = await fetch(`http://localhost:4000/api/v1/products/get-product-img/${_id}`)
                    //   return response.json()
                    // }
                    product.imgURL
                    
                   }
                  
                  alt={product.imageAlt}
                  className=" h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-center items-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href="#"> */}
                      <span aria-hidden="true" className="absolute inset-0 group" >
                                </span>
                      <ReactStars 
                        count={product.stars}
                        size={24}
                        edit = {false}
                        color1={'#ffc107'}

                      />
                      <p className="text-lg py-2 font-medium text-gray-900">{product.name}</p>
                      
                <p className="px-5 pb-2 text-base font-medium text-emerald-600">₹{product.price}</p>
                <div className=" flex items-center justify-center overflow-hidden transition-all group-hover:overflow-visible">
                   {/* transition-all transform translate-y-[-100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover: bg-emerald-600  */}
      <button className="shadow-2xl  mx-1 text-white px-2 py-3 transition-all transform translate-y-[-100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover: bg-emerald-600  ">Preview</button>
      <button onClick = {() => handleClick(product)} className="shadow-2xl  mx-1 text-white px-2 py-3 transition-all transform translate-y-[-100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover: bg-emerald-600  ">Add to Cart</button>
      {/* <button  className="shadow-2xl  mx-1 text-white px-2 py-3  transition-all transform translate-y-[-100%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 hover: bg-emerald-600 ">Wishlist</button> */}
    </div>
            

                    {/* </a> */}
                  </h3>                  
                </div>
              </div>
            </div>
            
          ))}          
        </div> }
      </div>
    </div>
    </div>
  )
}


export default ItemList
