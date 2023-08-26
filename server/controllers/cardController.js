const CardModel = require("../model/cardModel");
const createError = require("http-errors");
const createHttpError = require("http-errors");
const mongoose = require("mongoose");

const fs = require('fs');
const { expiryDate } = require("../helpers/expiryDate");




/* -------------------------------------------------------------------------- */
/*                         get the single card details    (interface view)    */
/* -------------------------------------------------------------------------- */

const getSingleCard = async (req, res, next) => {
  try {
    const locationData = {
      ip: req.body.ip,
      city: req.body.city,
      region: req.body.region,
      country: req.body.country_name,
      count: 1
    }
    // console.log(locationData);
    // const card = await CardModel.findOne({ _id: req.params.id });
    // const card = await CardModel.findOne({ $and: [{ _id: req.params.id }, { block: false }] });
    const card = await CardModel.findOne({ $and: [{ _id: req.params.id }, { $or: [{ block: false }, { status: "active" }] }] }).populate("userID");
    // const QRCode = await generateQR('https://zeeqr.info/profile-view/641eb3995cc9b4462a832959');
    // console.log(card, 'qwert123');

    if (card?.userID?.adminID) {
      // console.log('2345678');
      const exp = await expiryDate(card.userID.adminID);
      // console.log(exp,'77777777777');

      if (exp === "notExpired") {

        await card.updateOne({ $inc: { "tapCount": 1 } });

        const ExistLocation = card.location.filter(loc => loc.ip === locationData.ip && loc.city === locationData.city && loc.region === locationData.region && loc.country === locationData.country);
        // console.log("Exist");

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

        res.status(200).json({ success: true, card, message: "Single Booked Card" });
      } else {
        res.status(401);
      }

    } else {
      await card.updateOne({ $inc: { "tapCount": 1 } });

      const ExistLocation = card.location.filter(loc => loc.ip === locationData.ip && loc.city === locationData.city && loc.region === locationData.region && loc.country === locationData.country);
      // console.log("Exist esle");

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

      res.status(200).json({ success: true, card, message: "Single Booked Card" });
    }

    // res
    //   .status(200)
    //   .json({ success: true, card, message: "Single Booked Card" });

  } catch (error) {
    console.log(error);
    next(error);
  }
};






module.exports = {
  
  getSingleCard,
};
