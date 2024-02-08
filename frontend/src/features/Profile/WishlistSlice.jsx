import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistProducts: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      //to see if we have some initallly products
      const itemIndex = state.wishlistProducts.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.wishlistProducts[itemIndex].wquantity += 1;
      } else {
        const varProducts = { ...action.payload, wquantity: 1 };

        state.wishlistProducts.push(varProducts);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistProducts));
    },
    afterAddRemove(state, action) {
      const wishlistProduct = state.wishlistProducts.filter(
        (wishprod) => wishprod._id !== action.payload._id
      );
      state.wishlistProducts = wishlistProduct;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistProducts));
    },
  },
});

export const { addToWishlist, afterAddRemove } = WishlistSlice.actions;

export default WishlistSlice.reducer;
