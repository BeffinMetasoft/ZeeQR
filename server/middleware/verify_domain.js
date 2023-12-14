const createError = require('http-errors')
// import Admin from "../model/adminModel";
const Admin = require("../model/adminModel")
const Card = require("../model/cardModel")
// import Card from "../model/cardModel";

const verifyDomain = async (req, res, next) => {
    try {
        const { url } = req.body
        const splitArray = url?.split("/profile-view/");
        const domain = splitArray[0]
        // console.log(domain, 'domain');

        const card = await Card.findOne({ $and: [{ _id: req.params.id }, { status: "active" }] }).populate("userID");
        const admin = await Admin.findOne({ _id: card?.userID?.adminID })
        // console.log(admin, 'admin');
        // console.log(process.env.FRONT_END_MAIN_DOMAIN,'domainasssssssssssssssss');
        if (domain === process.env.FRONT_END_MAIN_DOMAIN) {
            // console.log('aaaaaaaaaaaaaaaaaaaaaa');
            if (card?.userID?.adminID) {
                // const admin = await Admin.findOne({ _id: card?.userID?.adminID })
                // console.log(admin.domain, 'admin domain');
                if (admin?.domain) {
                    if (admin?.domain === domain) {
                        next()
                    } else {
                        throw createError.Unauthorized("Un Authorized Route")
                    }
                } else {
                    next()
                }
            } else {
                next()
            }
        } else {
            // console.log('elseeeeeeeeeeeee');

            if (admin?.domain === domain) {
                next()
            } else {
                throw createError.Unauthorized("Un Authorized Route")
            }
        }
    } catch (error) {
        res.status(error.status || 500).json({ success: false, message: error.message || "Something went wrong" })

    }
}


module.exports = { verifyDomain }