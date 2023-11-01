const mongoose = require('mongoose')
const User = require('./userModel')

const ReviewQrSchema = new mongoose.Schema({
    reviewUrl: {
        type: String,
        required: [true, "URL is required"],
    },
    reviewType: {
        type: String,
    },
    QRCode: {
        type: String,
        required: [true, "QRCode is required"],
    },
    status: {
        type: String,
        default: "active",
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: [true, "User ID is required"],
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
    expire: {
        type: Number,
        default: '3'
    }
})

const ReviewQR = mongoose.model('ReviewQR', ReviewQrSchema)
module.exports = ReviewQR