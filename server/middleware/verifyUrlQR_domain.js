const createError = require('http-errors')
// import Admin from "../model/adminModel";
const Admin = require("../model/adminModel")
const Card = require("../model/cardModel")
const RedirectionQR = require('../model/redirectionQrModel')
const User = require('../model/userModel')
// import Card from "../model/cardModel";

function getBaseUrl(url) {
    const urlObject = new URL(url);
    return urlObject.origin;
}
function getUrlParts(url) {
    const urlObject = new URL(url);
    const baseUrl = urlObject.origin;
    const remainingPart = url.substring(baseUrl.length);
    const includesUrl = remainingPart.includes("/url/");
    return {
        baseUrl: baseUrl,
        remainingPart: remainingPart,
        remainingPartLength: remainingPart.length,
        includesUrl: includesUrl
    };
}


const verifyUrlQRDomain = async (req, res, next) => {
    try {
        const { url } = req.body
        // console.log(url, 'qwerty');
        // console.log(req.params.id,'params');

        // const splitArray = url?.split("/url/");
        // console.log(splitArray);
        // const domain = splitArray[0]
        const urlParts = getUrlParts(url);
        const domain = urlParts.baseUrl
        // console.log(domain, 'domain');
        // console.log(urlParts.includesUrl, 'domain');

        let card
        if (urlParts.includesUrl) {

            card = await RedirectionQR.findOne({ $and: [{ _id: req.params.id }, { status: "active" }] }).populate("userID");
        } else {
            card = await RedirectionQR.findOne({ $and: [{ shortUrl: req.params.id }, { status: "active" }] }).populate("userID");

        }

        const admin = await Admin.findOne({ _id: card?.userID?.adminID })
        // console.log(admin, 'admin');
        // console.log(process.env.FRONT_END_MAIN_DOMAIN,'domainasssssssssssssssss');
        if (admin) {
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
        } else {
            const user = await User.findOne({ _id: card?.userID?._id })
            // console.log(user,'ooo');
            if (domain === process.env.FRONT_END_MAIN_DOMAIN) {
                // console.log('aaaaaaaaaaaaaaaaaaaaaa');
                if (card?.userID) {
                    // console.log('bbbbbbbbbbbbbbbbb');
                    if (user?.domain) {
                        // console.log(user?.domain, 'cccccccccccc');
                        // console.log(domain, 'cccccccccccc1111');
                        if (user?.domain === domain) {
                            // console.log('dddddddddddd');
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

                if (user?.domain === domain) {
                    next()
                } else {
                    throw createError.Unauthorized("Un Authorized Route")
                }
            }
        }

    } catch (error) {
        console.log(error, 'qwer');
        res.status(error.status || 500).json({ success: false, message: error.message || "Something went wrong" })

    }
}


module.exports = { verifyUrlQRDomain }