const CardModel = require("../model/cardModel");
const createError = require("http-errors");
const createHttpError = require("http-errors");
const mongoose = require("mongoose");

const fs = require('fs');
const { expiryDate } = require("../helpers/expiryDate");
const { checkExpiry } = require("../helpers/checkExpiry");
const ReviewQR = require("../model/reviewQrModel");




/* -------------------------------------------------------------------------- */
/*                         get the single card details    (interface view)    */
/* -------------------------------------------------------------------------- */

const getSingleCard = async (req, res, next) => {
  try {

    const card = await CardModel.findOne({ $and: [{ _id: req.params.id }, { status: "active" }] }).populate("userID");
    if (card?.expire) {

      const cardExpiry = await checkExpiry(card)
      if (cardExpiry === "notExpired") {

        if (card?.userID?.adminID) {
          const exp = await expiryDate(card.userID.adminID);

          if (exp === "notExpired") {
            res.status(200).json({ success: true, card, message: "Single Booked Card" });
          } else {
            res.status(498).json({ success: false, message: "Admin expired" });
          }
        } else {
          res.status(200).json({ success: true, card, message: "Single Booked Card" });
        }
      } else {
        res.status(498).json({ success: false, message: "Profile Card Expired, Please Contact Admin" });
      }
    } else {
      // console.log('1234567');

      if (card?.userID?.adminID) {
        const exp = await expiryDate(card.userID.adminID);

        if (exp === "notExpired") {
          res.status(200).json({ success: true, card, message: "Single Booked Card" });
        } else {
          res.status(498).json({ success: false, message: "Admin expired" });
        }
      } else {
        res.status(200).json({ success: true, card, message: "Single Booked Card" });
      }
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
};



const addLocations = async (req, res, next) => {
  try {
    const locationData = {
      ip: req.body.ip,
      city: req.body.city,
      region: req.body.region,
      country: req.body.country_name,
      count: 1
    }
    const card = await CardModel.findOne({ _id: req.params.id })


    await card.updateOne({ $inc: { "tapCount": 1 } });

    const ExistLocation = card.location.filter(loc => loc.ip === locationData.ip && loc.city === locationData.city && loc.region === locationData.region && loc.country === locationData.country);

    if (ExistLocation.length > 0) {
      const query = { _id: card._id };
      const updateDocument = {
        $inc: { "location.$[i].count": 1 }
      };
      const options = {
        arrayFilters: [
          {
            "i.ip": locationData.ip,
            "i.city": locationData.city,
            "i.region": locationData.region,
            "i.country": locationData.country,
          }
        ]
      };
      await CardModel.updateOne(query, updateDocument, options);

    } else {
      await card.updateOne(
        { $push: { location: locationData } }
      )
    }

    res.status(200).json({ success: true, message: "location added" });

  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* -------------------------------------------------------------------------- */
/*                         reviewQr interface details                         */
/* -------------------------------------------------------------------------- */

const reviewQrDetails = async (req, res, next) => {
  try {
    const review = await ReviewQR.findOne({ $and: [{ _id: req.params.id }, { status: "active" }] }).populate("userID");

    // console.log(review, 'cardsssssdsdsdsdsdsd');

    if (review.expire) {

      const cardExpiry = await checkExpiry(review)
      if (cardExpiry === "notExpired") {

        if (review?.userID?.adminID) {
          const exp = await expiryDate(review.userID.adminID);

          if (exp === "notExpired") {
            res.status(200).json({ success: true, review, message: "Single Booked Card" });
          } else {
            res.status(498).json({ success: false, message: "Admin expired" });
          }
        } else {
          res.status(200).json({ success: true, review, message: "Single Booked Card" });
        }
      } else {
        // console.log('0987654321');
        res.status(498).json({ success: false, message: "Profile Card Expired, Please Contact Admin" });
      }
    } else {
      // console.log('1234567');
      if (review?.userID?.adminID) {
        const exp = await expiryDate(review.userID.adminID);

        if (exp === "notExpired") {
          res.status(200).json({ success: true, review, message: "Single Booked Card" });
        } else {
          res.status(498).json({ success: false, message: "Admin expired" });
        }
      } else {
        res.status(200).json({ success: true, review, message: "Single Booked Card" });
      }
    }
  } catch (error) {
    console.log(error);
    next(error)
  }
}

module.exports = {

  getSingleCard,
  addLocations,
  reviewQrDetails
};
