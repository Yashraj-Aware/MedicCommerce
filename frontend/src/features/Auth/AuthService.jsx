import axios from 'axios'

const API_URL = 'http://localhost:4000/api/v1/auth/'

//register user
const register = async(userData) => {

    const response = await axios.post(API_URL+'register', userData)

    console.log(response.data);
    if(response.data)
    {
        // requires data in string format ot store the data
        localStorage.setItem('user', JSON.stringify(response.data))

    }

    return response.data
}

//login
const login = async(userData) => {

    const response = await axios.post(API_URL+'login', userData)

    console.log(response.data);
    if(response.data)
    {
        // requires data in string format ot store the data
        localStorage.setItem('user', JSON.stringify(response.data))

    }

    return response.data
}
//logout
const logout = () => {
    localStorage.removeItem('user')
}

const AuthService = {
    register,
    logout,
    login
}

export default AuthService