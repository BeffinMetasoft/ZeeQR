const moment = require("moment");
const Admin = require("../model/adminModel");


async function expiryDate (id) {
    const admin = await Admin.findById(id)

    const date_string = admin.createdDate
    var expiration = moment(date_string).format("YYYY-MM-DD");
    var current_date = moment().format("YYYY-MM-DD");
    var days = moment(current_date).diff(expiration, 'days');
    if ( days >= admin.expiryDate ) {
        return 'expired'
    }else{

        return 'notExpired'
    }
}

module.exports = { expiryDate }