const mongoose = require("mongoose");
const Admin = require("./adminModel");
// const Admin = require("./adminModel");
// const User = require("./userModel");



const ContactCardSchema = mongoose.Schema({

    personalDetails: {
        name: {
            type: String,
            required: [true, "Name is required"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true
        },
        phone: {
            type: Number,
            minlength: [10, "phone number must be 10 digits"],
            required: [true, "Phone number is required"]
        },
        companyDesignation: String,
        companyName: String,
        secondaryEmail: String,
        secondaryPhone: String,
        about: String,
        address: String,
        country: String,
        state: String,
        locationUrl: String,
    },
    socialMedias: {
        whatsappNumber: String,
        facebook: String,
        instagram: String,
        twitter: String,
        linkedin: String,
        skype: String,
        youtube: String,
        tiktok: String,
        snapchat: String,
    },
    SMediaPostion: {
        pos1: { type: String },
        pos2: { type: String },
        pos3: { type: String },
        pos4: { type: String },
        pos5: { type: String },
        pos6: { type: String },
        pos7: { type: String },
        pos8: { type: String },
        pos9: { type: String },
        pos10: { type: String },
    },
    profileImage: {
        type: String,
    },
    status: {
        type: String,
        default: "active",
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Admin,
        required: [true, "User ID is required"],
    },
    expire: {
        type: Number,
        // default: '3',
    },
    vCard: {
        type: String,
    },
    QRCode: {
        type: String,
        required: [true, "QRCode is required"],
    },
    tapCount: {
        type: Number,
        default: 0
    },
    location: {
        type: Array,
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },


})
mongoose.set('strictQuery', false);

const ContactCard = mongoose.model('ContactCards', ContactCardSchema)
module.exports = ContactCard