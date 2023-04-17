const mongoose = require("mongoose")

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
        required: [true, "About is required"]
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
        required: [true, "WebsiteUrl is required"]
    },
    websiteName: {
        type: String,
        required: [true, "WebsiteName is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    state: {
        type: String,
        required: [true, "State is required"]
    },
    country: {
        type: String,
        required: [true, "Country is required"]
    },
    locationUrl: {
        type: String,
        required: [true, "locationUrl is required"]
    },
    backgroundImage:{
        type:String,
        required: [true, " backgroundImage is required"]
    },
    profileImage:{
        type:String,
        required: [true, "profileImage is required"]
    },
    companyLogo:{
        type:String,
    },
    websiteImage:{
        type:String,
        required: [true, "websiteImage is required"]
    },
    highlightPhotos:{
        type:Array,
        default:[]
    },
    
    status: {
        type: String,
        default: "Processing"
    },
    userID: {
        type: String,
        required: [true, "UserID is required"]
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
    skype:{
        type:String
    },
    youtube:{
        type:String
    },
    vCard:{
        type:String
    },
    colorCode:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    },
    block: {
        type: Boolean,
       default:false
    },
    theme:{
        type:String,
        default:"standard"
    },
    checkLogo:{
        type: Boolean,
        default:true 
    }



})
mongoose.set('strictQuery', false);

const Card = mongoose.model('Card', CardSchema)
module.exports = Card