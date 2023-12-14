const mongoose = require("mongoose")

const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        validate: [validateEmail, 'Please fill a valid email address'],
        required: [true, "Email is required"],
        unique: true
    },
    cardLimit: {
        type: Number,
        default: 1
    },
    password: {
        type: String,
        minlength: [6, "Password must contain 6 letters"],
        required: [true, "Password is required"]
    },
    profileImage: {
        type: String,
    },
    status: {
        type: String,
        default: 'active'
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    expiryDate: {
        type: Number
    },
    domain: {
        type: String
    }
   
   
})
mongoose.set('strictQuery', false);

const Admin = mongoose.model('Admin',AdminSchema)
module.exports= Admin