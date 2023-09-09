const moment = require("moment");


async function checkExpiry(data) {
    let date_string
    if (data.date) {
        date_string = data.date
    } else {
        date_string = data.createdDate
    }
    var expiration = moment(date_string).format("YYYY-MM-DD");
    var current_date = moment().format("YYYY-MM-DD");
    var days = moment(current_date).diff(expiration, 'days');
    if (days > data.expire) {
        return 'expired'
    } else {

        return 'notExpired'
    }
}

module.exports = { checkExpiry }