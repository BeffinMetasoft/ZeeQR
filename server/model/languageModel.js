const mongoose = require("mongoose")


const LanguageSchema = mongoose.Schema({
    language: {
        type: String,
    },
    languageCode: {
        type: String,
    },
    languageDatas: {
        type: Object,
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },

})
mongoose.set('strictQuery', false);

const Languages = mongoose.model('Language', LanguageSchema)
module.exports = Languages