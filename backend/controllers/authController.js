const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const registerController = async(req, res) => {

    try {
        const {name, email , password, phone, address} = req.body
        const user = await userModel.register(name, email , password, phone, address)
        //calling res
        res.status(200).json({
            // success: true,
            // message: 'User Registration is Successfull',
            user
        })


    } catch (error) {
        console.log(`error: ${error.message}`);
        res.status(500).send({
            success: false,
            message: 'Error in registration',
            error: `${error.message}`
        })
    }
};

//token creation function
const createToken = (_id) => {
    return jwt.sign({_id:_id}, process.env.SECRET_KEY, {expiresIn: "3d"})
}

// login controller
const loginController = async(req, res) => {
    const {email , password} = req.body;
    try {

        const user = await userModel.login(email, password);

        const token = createToken(user._id)
        
        res.status(200).send({
            success: true,
            message: 'User login successfully',
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                _id: user._id
            },
            token,
        })
    } catch (error) {
        console.log(`error: ${error.message}`);
        return res.status(401).send({
            success: false,
            message: "Invalid email or password"
        })
    }
}

//testing middleware
const testController = async(req,res) => {
    res.send("protected route")
}


module.exports = {
    registerController,
    loginController,
    testController
}