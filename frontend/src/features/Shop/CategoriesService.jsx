import axios from 'axios'

const API_URL = 'http://localhost:4000/api/v1/category/get-category'

const category = async() => {

    const response = await fetch(API_URL)

    const data = response.json()

    return data
    
    
    // console.log(response.data);
}

const CategoriesService = {
    category
}

export default CategoriesService