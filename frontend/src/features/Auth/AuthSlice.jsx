import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import AuthService from './AuthService'

// get user form localstoreage
const user = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user : user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading : false,
    message : ""
}

// register the user
export const register = createAsyncThunk('auth/register', async(user , thunkAPI) => {
    try {
        return await AuthService.register(user)
    } catch (error) {
        
        const message = (error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            // rejects the value with the given message
        return thunkAPI.rejectWithValue(message)
    }
})

//login user
export const login = createAsyncThunk('auth/login', async(user , thunkAPI) => {
    try {
        return await AuthService.login(user)
    } catch (error) {
        
        const message = (error.response && error.response.data && error.response.data.message
            ) || error.message || error.toString()

            // rejects the value with the given message
        return thunkAPI.rejectWithValue(message)
    }
})

// logout the user
export const logout = createAsyncThunk('auth/logout', async() => {
     await AuthService.logout()
})

export const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        // to reset the values after the registration or loggin has been done
        reset : (state) => {
            state.isSuccess = false
            state.isLoading = false
            state.isError = false
            state.message = ""

        }
    },

    //async func and thunk will go here
    extraReducers : (builder) => {
        builder.addCase(register.pending, (state) =>{
            state.isLoading = true

        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        builder.addCase(register.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload
            state.user = null
        })
        builder.addCase(login.pending, (state) =>{
            state.isLoading = true

        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        builder.addCase(login.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message = action.payload
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer
