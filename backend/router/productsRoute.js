const express = require("express");
const { createProduct, getAllProducts, getSingleProduct, getfilteredProducts } = require("../controllers/productsController");
const formidable = require("express-formidable");

const{requireSignIn, isAdmin} = require('../middleware/authMiddleware')
// router obj
const router = express.Router();

router.post("/create-product", formidable(), requireSignIn ,createProduct);

router.get("/get-products", getAllProducts)

router.get("/get-product/:id", getSingleProduct)

router.post("/fil-product", getfilteredProducts)



// router.get("/get-product-img/:id", getProductImage)

module.exports = router;
