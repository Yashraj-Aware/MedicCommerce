const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.ObjectId,
        ref: "categories"
    },
    stars: {
        type: Number,
        required: true
    },
    image: {
        type: Object,
        required: true
    },
    imgURL: {
        type: String,
        
        required: true,
        
    },
    quantity: {
        type: Number,
        required: true
    },

},{timestamps: true})

module.exports = mongoose.model('Products', productSchema)