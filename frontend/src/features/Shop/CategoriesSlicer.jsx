import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



//get all categories stored in the backend



export const filterCategory = createAsyncThunk('categories/get', async(thunkAPI) => {

    try {
        
        const response = await fetch('http://localhost:4000/api/v1/category/get-category')

        const data = response.json()
        // console.log(data);   

        return data;

    } catch (error) {
        
        const message = (error.response && error.response.data && error.resposne.data.message) ||
            error.message || error.toString()

            //reject with given message
            return thunkAPI.rejectedWithValue(message)
    }
})


export const categorySlice = createSlice({
    name: "getCategories",
    initialState: {
        isLoading: false,
        data: [],
        isSuccess: false,
        isError: false,
        message: ""
    },
    reducers : {

    },

    extraReducers: (builder) => {
        builder.addCase(filterCategory.pending, (state) => {
            state.isLoading = false
        })
        builder.addCase(filterCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = true
            state.data = action.payload
        })
        builder.addCase(filterCategory.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload
            state.user = null
        })
    }
}) 


export default categorySlice.reducer