const mongoose = require('mongoose')
const productsModel = require('../models/productModel')
const categoryModel = require('../models/categoryModel')
const cloudinary = require("../helper/productHelper")
const fs = require('fs')

//to create product
const createProduct = async(req,res) => {
    // const {img} = req.files
    const{image} = req.fields

    try {
        if(image)
        {
            const uploadRes = await cloudinary.uploader.upload(image,{
                upload_preset: "prodUpload"
            })

            if(uploadRes)
            {
                try {


        
                    const product = new productsModel({
                        ...req.fields,
                        image: uploadRes
                    })
                
            
                
                    await product.save()
            
                    // res.status(201).json({success: true, message: 'creation successfull', product})
                    res.status(201).json(product)
                } catch (error) {
                    res.status(500).json({success: false, error: `${error.message}`, message: "error occured during creation of product"})
                }
            }
        }
    } catch (error) {
        
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