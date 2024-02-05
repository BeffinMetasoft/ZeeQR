const mongoose = require('mongoose')
const User = require('./userModel')

const RedirectionQrSchema = new mongoose.Schema({
    redirectionUrl: {
        type: String,
        required: [true, "URL is required"],
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
    createdDate: {
        type: Date,
        default: Date.now()
    },
    expire: {
        type: Number,
        default: '3'
    },
    tapCount: {
        type: Number,
        default: 0
    },
    location: [
        {
            ip: String,
            city: String,
            region: String,
            country: String,
            count: Number,
            timeLog: [
                { type: Date }
            ]
        }
    ],
})

const RedirectionQR = mongoose.model('RedirectionQR', RedirectionQrSchema)
module.exports = RedirectionQR