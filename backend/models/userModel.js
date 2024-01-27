const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true, // to remove whitespaces if there
    },
    //email -> uniques for one person 
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,

    },
    phone : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required : true
    }, 
    role: {
        type: Number,
        default: 0 // false
    }
}, {timestamps: true})


// static register -> regular function as this keyword is required

userSchema.statics.register = async function (name, email , password, phone, address) {
    //validation
    if(!name)
    {
        throw Error("Name is required")
    }
    if(!email)
    {
        throw Error("Email is required")
    }
    if(!validator.isEmail(email))
    {
        throw Error("Email is not valid");
    }
    if(!password)
    {
        throw Error("Password is required");
    }
    if(!validator.isStrongPassword(password))
    {
        throw Error("Password is not strong enough");
    }
    if(!phone)
    {
        throw Error("Phone is required");
    }
    if(!address)
    {
        throw Error("Address is required");
    }
         // check existing user
        const existingUser = await this.findOne({email})

            //validation
            if(existingUser)
            {
                throw Error("Email already registered, please login to access items");
            }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const user = this.create({name, email , password: hash, phone, address});

        return user;
}

userSchema.statics.login = async function(email , password)
{
    //validation
    if(!email || !password)
    {
        throw Error("All fields must be fillled");
    }

    const user = await this.findOne({ email });

    if(!user)
    {
        throw Error("Incorect email");
    }

    // password from the user variable is hashed and password -> regular
    const match = await bcrypt.compare(password , user.password)

    if(!match)
    {
        throw Error("Incorrect Credentials")

    }

    return user;
}




module.exports =  mongoose.model("Users", userSchema);