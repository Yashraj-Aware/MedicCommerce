import React from "react";
import  { Toaster } from 'react-hot-toast';
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";
import ProfilePage from "./pages/ProfilePage";
import WishlistPage from "./pages/WishlistPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="/shop" element={<ShopPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/profile" element={<ProfilePage />}></Route>
      <Route path="/wishlist" element={<WishlistPage />}></Route>
      <Route path="/myorders" element={<MyOrdersPage />}></Route>
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster toastOptions = {{duration: 1000}}  position= "bottom-right" />
    </div>
  );
}

export default App;
