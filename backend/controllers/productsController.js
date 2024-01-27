const mongoose = require('mongoose')
const productsModel = require('../models/productModel')
const categoryModel = require('../models/categoryModel')
const fs = require('fs')

//to create product
const createProduct = async(req,res) => {
    // const {img} = req.files
    // const{name, price, stars, category, description, quantity} = req.fields




    try {


        
        const product = await productsModel({...req.fields});
    

    
        await product.save()

        // res.status(201).json({success: true, message: 'creation successfull', product})
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({success: false, error: `${error.message}`, message: "error occured during creation of product"})
    }
}


//to get all products
const getAllProducts = async(req,res) => {

    if(req.params.id)
    {
        try {
            // this takes input as object so we have give key value
            const catid = await categoryModel.find({options: req.params.id});
            // console.log(catid);
            const products = await productsModel.find(catid)
            // console.log(products);
            res.status(200).json({success: true, message: 'retrieved filtered products', products})
        } catch (error) {
            res.status(500).json({success: false, error: `${error.message}`})
        }
    }

    try {
        
        const products = await productsModel.find({}).sort({createdAt: -1})

        // res.status(200).json({success: true, message: "retrieved all the products", products})

        // actual
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({success: false, error: `${error.message}`, message:'Error while retrieving all images'})
    }
}

const getProductImage = async(req,res) => {

    console.log(req.params.id);
    try {
        const prodImage = await productsModel.findById(req.params.id).select("img")
        console.log(prodImage.img.data);
        if(prodImage?.img?.data)
        {
            res.set('Content-type', prodImage.img.contentType)
            return res.status(200).json(prodImage.img.data)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: `${error.message}`, message: "unable to retrieve the image of product"})
        
    }
}

// get single product

const getSingleProduct = async(req,res) => {

    const id = req.params.id

    try {
        
        const product = await productsModel.findById(id)

        res.status(200).json({success: true, message: 'selected product retrieved', product})
    } catch (error) {
        
        res.status(500).json({success: false, error: `${error.message}`})
    }
    


}


const getfilteredProducts = async(req,res) => {

    



    try {
        // this takes input as object so we have give key value
        const catid = await categoryModel.find({options: req.params.id});
        // console.log(catid);
        const products = await productsModel.find(catid)
        // console.log(products);
        res.status(200).json({success: true, message: 'retrieved filtered products', products})
    } catch (error) {
        res.status(500).json({success: false, error: `${error.message}`})
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    getfilteredProducts
    // getProductImage
}