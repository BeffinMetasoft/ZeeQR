const mongoose = require("mongoose");
const User = require("./userModel");



const SharedContactSchema = mongoose.Schema({

    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,

    },
    contactDetails: {
        type: Object
    },
    status: {
        type: String,
        default: 'active'
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },


})
mongoose.set('strictQuery', false);

const SharedContacts = mongoose.model('SharedContacts', SharedContactSchema)
module.exports = SharedContacts