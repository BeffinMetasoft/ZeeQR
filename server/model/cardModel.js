const mongoose = require("mongoose");
const User = require("./userModel");

const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const CardSchema = mongoose.Schema({


    companyName: {
        type: String,
        required: [true, "Name is required"]
    },
    companyDesignation: {
        type: String,
        required: [true, "Designation is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    about: {
        type: String,
    },
    email: {
        type: String,
        //  validate: [validateEmail, 'Please fill a valid email address'],
        required: [true, "Email is required"],
    },
    phone: {
        type: Number,
        minlength: [10, "phone number must be 10 digits"],
        required: [true, "Phone number is required"]
    },
    websiteUrl: {
        type: String,
    },
    websiteName: {
        type: String,
    },
    address: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    locationUrl: {
        type: String,
    },
    backgroundImage: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    companyLogo: {
        type: String,
    },
    websiteImage: {
        type: String,
    },
    highlightPhotos: {
        type: Array,
        default: []
    },
    status: {
        type: String,
        default: "Processing"
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: [true, "User ID is required"],
    },
    QRCode: {
        type: String,
        required: [true, "QRCode is required"]
    },
    whatsappNumber: {
        type: Number
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String

    },
    linkedin: {
        type: String
    },
    skype: {
        type: String
    },
    youtube: {
        type: String
    },
    tiktok: {
        type: String
    },
    vCard: {
        type: String
    },
    colorCode: {
        type: String
    },
    companyProfile: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    block: {
        type: Boolean,
        default: false
    },
    theme: {
        type: String,
        default: "standard"
    },
    checkLogo: {
        type: Boolean,
        default: true
    },
    checkHighlight: {
        type: Boolean,
        default: true
    },
    checkProfile: {
        type: Boolean,
        default: true
    },
    checkPfCard: {
        type: Boolean,
        default: true
    },
    tapCount: {
        type: Number,
        default: 0
    },
    location: [

        {
            ip:String,
            city:String,
            region:String,
            country:String,
            count:Number,
            timeLog:[
               { type:Date}
            ]
        }
    ]
    ,
    expire: {
        type: Number,
        // default: '3',
    },


})
mongoose.set('strictQuery', false);

const Card = mongoose.model('Card', CardSchema)
module.exports = Card