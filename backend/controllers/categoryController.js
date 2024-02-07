const categoryModel = require('../models/categoryModel')
const slugify = require('slugify')


// create- category
const createCategoryController = async(req,res) => {
    
    try {
        
        const { catId, catName, options } = req.body;
        options[0].value = slugify(options[0].label)

        if(!catId)
        {
                return res.status(401).send({
                message: 'Category ID is required for category creation'
            })

        }

        const existingCategory = await categoryModel.findOne({ catId })
        // console.log(existingCategory._id);
        if(existingCategory)
        {
            
                
                // const updateExistingCategory = await categoryModel.updateOne({_id:existingCategory._id},{$addToSet: {options: options.value}})
                return res.status(200).send({
                    success: true,
                    message: 'Category already exists',
                    
                })
            
                
            
        }
        

        const category = await new categoryModel({catId, catName, options}).save()

        res.status(201).json(category)

    } catch (error) {

        res.status(500).send({
            success: false,
            error: `${error.message}`,
            message: 'Error occured in creation of category'

        })
    }
}

const getAllCategoryController = async(req,res) => {


    try {
        
        const {category} = req.body
        const cate = await categoryModel.find({category})
        // console.log(cate);
        res.status(200).json(cate)
    } catch (error) {
        console.log(`${error.message}`);

        res.status(500).send({
            success: false,
            error: `${error.message}`,
            message: 'Error occured while extracting all categories'
        })
    }


}


module.exports = {
    createCategoryController,
    getAllCategoryController
}