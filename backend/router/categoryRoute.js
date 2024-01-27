const express = require("express");
const {createCategoryController, getAllCategoryController } = require('../controllers/categoryController')
const{requireSignIn, isAdmin} = require('../middleware/authMiddleware')

//router object
const router = express.Router();

//create category
router.post('/create-category', requireSignIn,isAdmin ,createCategoryController)
// get category
router.get('/get-category', getAllCategoryController)


module.exports = router;
