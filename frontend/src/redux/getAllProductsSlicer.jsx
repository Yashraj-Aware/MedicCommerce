import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const fetchAllProducts = createAsyncThunk("fetchProducts", async () => {
    var params = ""
    const response = await fetch('http://localhost:4000/api/v1/products/get-products')

    // const response = await fetch('http://localhost:4000/api/v1/category/get-category')
    
    const data = response.json();

    return data;
})

const getProductsSlice = createSlice({
    name: 'getProducts',
    initialState: {
        isLoading: false,
        data : [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProducts.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        });
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.error = true;
            // state.data = action.payload
        });
    }
})

export default getProductsSlice.reducer;