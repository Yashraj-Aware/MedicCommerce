import {configureStore} from '@reduxjs/toolkit'
import { compose } from '@reduxjs/toolkit'
import getProductsReducer from '../redux/getAllProductsSlicer'
// import getProductImagesReducer from '../redux/getAllProductImagesSlicer'
import getCategoriesReducer from '../features/Shop/CategoriesSlicer'
import authReducer from '../features/Auth/AuthSlice'
import cartReducer from '../features/cart/CartSlice'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
    reducer: {
        auth: authReducer,
        getProducts : getProductsReducer,
        getCategories: getCategoriesReducer,
        cart: cartReducer,
        

    },
    
},composeEnhancers())