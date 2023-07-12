const moment = require("moment");
const Admin = require("../model/adminModel");


async function expiryDate (id) {
    const admin = await Admin.findById(id)
    // console.log(admin,'qwerty');

    const date_string = admin.createdDate
    // console.log(date_string,'cr date');
    var expiration = moment(date_string).format("YYYY-MM-DD");
    // console.log(expiration, 'expiration');
    var current_date = moment().format("YYYY-MM-DD");
    // console.log(current_date, 'current_date');
    var days = moment(current_date).diff(expiration, 'days');
    // console.log(days,'dddddddddddddaaaaaaaaaaaayssssssss');
    if ( days >= admin.expiryDate ) {
        return 'expired'
    }else{

        return 'notExpired'
    }
}

module.exports = { expiryDate }