const mongoose = require('mongoose')
const slugify = require('slugify')

const categorySchema = new mongoose.Schema({
    catId: {type: String, required: true, unique: true},
    catName: {type: String, required: true, unique: true },
    options: [{
               value:{type: String, lowercase: true},
                label:{type: String, required: true },
                checked:{type:Boolean, deafult: false},}]

})

// const categorySchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required: true,
//         unique: true
//     },
//     slug: {
//         type: String,
//         lowercase: true
//     }
// })


// refernce -> categories
module.exports = mongoose.model('categories', categorySchema)

