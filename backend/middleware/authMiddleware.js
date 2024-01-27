const jwt = require('jsonwebtoken')
const userModel =  require('../models/userModel')

//protected routes through token base
const requireSignIn = async (req, res, next) => {

    try {
        const decodeString = jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
        //passing the decode to the user, if not then the _id is not readable
        req.user = decodeString;
        next()
    } catch (error) {
        console.log(error);
    }
}

//admin access

const isAdmin = async(req,res,next) => {

    try {
        
        // the user comes from login controller user obj
        const user = await userModel.findById(req.user._id)

        if(user.role !== 1)
        {
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access, Restricted to Admin Only"
            })
        } else
        {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Error in admin middleware",
            error: `${error.message}`
        })
    }
}

module.exports = {requireSignIn, isAdmin}