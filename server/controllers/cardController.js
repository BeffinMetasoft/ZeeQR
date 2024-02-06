const CardModel = require("../model/cardModel");
const createError = require("http-errors");
const createHttpError = require("http-errors");
const mongoose = require("mongoose");

const fs = require('fs');
const { expiryDate } = require("../helpers/expiryDate");
const { checkExpiry } = require("../helpers/checkExpiry");
const ReviewQR = require("../model/reviewQrModel");
const ContactCard = require("../model/contactCardModel");
const Admin = require("../model/adminModel");
const Languages = require("../model/languageModel");
const RedirectionQR = require("../model/redirectionQrModel");




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

const getParticularRouteCard = async (req, res, next) => {
  try {

    // console.log(req.body);
    const { url } = req.body
    const splitArray = url?.split("/profile-view/");
    const domain = splitArray[0]
    // console.log(domain, 'domain');

    const card = await CardModel.findOne({ $and: [{ _id: req.params.id }, { status: "active" }] }).populate("userID");
    const admin = await Admin.findOne({ _id: card?.userID?.adminID })
    // console.log(admin, 'admin');
    // console.log(admin.domain, 'admin domain');

    if (admin?.domain === domain) {
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
    } else {
      res.status(498).json({ success: false, message: "Un authorised route" });
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
      count: 1,
      timeLog: [Date.now()],

    }
    const card = await CardModel.findOne({ _id: req.params.id })


    await card.updateOne({ $inc: { "tapCount": 1 } });

    const ExistLocation = card.location.filter(loc => loc.ip === locationData.ip && loc.city === locationData.city && loc.region === locationData.region && loc.country === locationData.country);

    if (ExistLocation.length > 0) {
      const query = { _id: card._id };
      const updateDocument = {
        $inc: { "location.$[i].count": 1 },
        $push: { "location.$[i].timeLog": Date.now() }
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

/* -------------------------------------------------------------------------- */
/*                           add review QR Location                           */
/* -------------------------------------------------------------------------- */
const addReviewCardLocations = async (req, res, next) => {
  try {
    const locationData = {
      ip: req.body.ip,
      city: req.body.city,
      region: req.body.region,
      country: req.body.country_name,
      count: 1,
      timeLog: [Date.now()],
    }
    const card = await ReviewQR.findOne({ _id: req.params.id })


    await card.updateOne({ $inc: { "tapCount": 1 } });

    const ExistLocation = card.location.filter(loc => loc.ip === locationData.ip && loc.city === locationData.city && loc.region === locationData.region && loc.country === locationData.country);

    if (ExistLocation.length > 0) {
      const query = { _id: card._id };
      const updateDocument = {
        $inc: { "location.$[i].count": 1 },
        $push: { "location.$[i].timeLog": Date.now() }
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
      await ReviewQR.updateOne(query, updateDocument, options);

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
/*                       contact card interface details                       */
/* -------------------------------------------------------------------------- */

const contactCardDetails = async (req, res, next) => {
  try {
    const card = await ContactCard.findOne({ $and: [{ _id: req.params.id }, { status: "active" }] }).populate("userID");

    // console.log(card, 'cardsssssdsdsdsdsdsd');

    const cardExpiry = await checkExpiry(card)
    if (cardExpiry === "notExpired") {

      if (card?.userID?.adminID) {
        const exp = await expiryDate(card.userID._id);

        if (exp === "notExpired") {
          res.status(200).json({ success: true, card, message: "Single Booked Card" });
        } else {
          res.status(498).json({ success: false, message: "Admin expired" });
        }
      } else {
        res.status(200).json({ success: true, card, message: "Single Booked Card" });
      }
    } else {
      // console.log('0987654321');
      res.status(498).json({ success: false, message: "Profile Card Expired, Please Contact Admin" });
    }

  } catch (error) {
    console.log(error);
    next(error)
  }
}

/* -------------------------------------------------------------------------- */
/*                         add conatact card location                         */
/* -------------------------------------------------------------------------- */
const addContactCardLocations = async (req, res, next) => {
  try {
    const locationData = {
      ip: req.body.ip,
      city: req.body.city,
      region: req.body.region,
      country: req.body.country_name,
      count: 1,
      timeLog: [Date.now()],
    }
    const card = await ContactCard.findOne({ _id: req.params.id })


    await card.updateOne({ $inc: { "tapCount": 1 } });

    const ExistLocation = card.location.filter(loc => loc.ip === locationData.ip && loc.city === locationData.city && loc.region === locationData.region && loc.country === locationData.country);

    if (ExistLocation.length > 0) {
      const query = { _id: card._id };
      const updateDocument = {
        $inc: { "location.$[i].count": 1 },
        $push: { "location.$[i].timeLog": Date.now() }
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
      await ContactCard.updateOne(query, updateDocument, options);

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
/*                         redirectionQr interface details                         */
/* -------------------------------------------------------------------------- */

const redirectioQrDetails = async (req, res, next) => {
  try {
    const redirectionQR = await RedirectionQR.findOne({ $and: [{ _id: req.params.id }, { status: "active" }] }).populate("userID");

    // console.log(redirectionQR, 'cardsssssdsdsdsdsdsd');

    if (redirectionQR?.expire) {

      const cardExpiry = await checkExpiry(redirectionQR)
      if (cardExpiry === "notExpired") {

        if (redirectionQR?.userID?.adminID) {
          const exp = await expiryDate(redirectionQR.userID.adminID);

          if (exp === "notExpired") {
            res.status(200).json({ success: true, redirectionQR, message: "Single Booked Card" });
          } else {
            res.status(498).json({ success: false, message: "Admin expired" });
          }
        } else {
          res.status(200).json({ success: true, redirectionQR, message: "Single Booked Card" });
        }
      } else {
        // console.log('0987654321');
        res.status(498).json({ success: false, message: "Profile Card Expired, Please Contact Admin" });
      }
    } else {
      // console.log('1234567');
      if (redirectionQR?.userID?.adminID) {
        const exp = await expiryDate(redirectionQR.userID.adminID);

        if (exp === "notExpired") {
          res.status(200).json({ success: true, redirectionQR, message: "Single Booked Card" });
        } else {
          res.status(498).json({ success: false, message: "Admin expired" });
        }
      } else {
        res.status(200).json({ success: true, redirectionQR, message: "Single Booked Card" });
      }
    }
  } catch (error) {
    console.log(error);
    next(error)
  }
}
const dynamicQrDetails = async (req, res, next) => {
  try {
    const dynamicQR = await RedirectionQR.findOne({ $and: [{ shortUrl: req.params.id }, { status: "active" }] }).populate("userID");

    // console.log(redirectionQR, 'cardsssssdsdsdsdsdsd');

    if (dynamicQR?.expire) {

      const cardExpiry = await checkExpiry(dynamicQR)
      if (cardExpiry === "notExpired") {

        if (dynamicQR?.userID?.adminID) {
          const exp = await expiryDate(dynamicQR.userID.adminID);

          if (exp === "notExpired") {
            res.status(200).json({ success: true, dynamicQR, message: "Single Booked Card" });
          } else {
            res.status(498).json({ success: false, message: "Admin expired" });
          }
        } else {
          res.status(200).json({ success: true, dynamicQR, message: "Single Booked Card" });
        }
      } else {
        // console.log('0987654321');
        res.status(498).json({ success: false, message: "Profile Card Expired, Please Contact Admin" });
      }
    } else {
      // console.log('1234567');
      if (dynamicQR?.userID?.adminID) {
        const exp = await expiryDate(dynamicQR.userID.adminID);

        if (exp === "notExpired") {
          res.status(200).json({ success: true, dynamicQR, message: "Single Booked Card" });
        } else {
          res.status(498).json({ success: false, message: "Admin expired" });
        }
      } else {
        res.status(200).json({ success: true, dynamicQR, message: "Single Booked Card" });
      }
    }
  } catch (error) {
    console.log(error);
    next(error)
  }
}



/* -------------------------------------------------------------------------- */
/*                           add Redirection QR Location                           */
/* -------------------------------------------------------------------------- */
const addRedirectionQrLocations = async (req, res, next) => {
  try {
    const locationData = {
      ip: req.body.ip,
      city: req.body.city,
      region: req.body.region,
      country: req.body.country_name,
      count: 1,
      timeLog: [Date.now()],
    }
    const card = await RedirectionQR.findOne({ _id: req.params.id })


    await card.updateOne({ $inc: { "tapCount": 1 } });

    const ExistLocation = card.location.filter(loc => loc.ip === locationData.ip && loc.city === locationData.city && loc.region === locationData.region && loc.country === locationData.country);

    if (ExistLocation.length > 0) {
      const query = { _id: card._id };
      const updateDocument = {
        $inc: { "location.$[i].count": 1 },
        $push: { "location.$[i].timeLog": Date.now() }
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
      await RedirectionQR.updateOne(query, updateDocument, options);

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
/*                                get language                                */
/* -------------------------------------------------------------------------- */
const getLanguages = async (req, res, next) => {
  // console.log('hello hai');
  try {
    const { lng } = req.params;
    const languageDetails = await Languages.findOne({ languageCode: lng ? lng : 'en' })

    // const languageData = languages[lng] || languages['en'];
    const languageData = languageDetails?.languageDatas
    // console.log(languageData, 'qwrty');
    res.json(languageData);
  } catch (error) {
    next(error)
  }

}

module.exports = {

  getSingleCard,
  addLocations,
  reviewQrDetails,
  addReviewCardLocations,
  contactCardDetails,
  addContactCardLocations,
  redirectioQrDetails,
  dynamicQrDetails,
  addRedirectionQrLocations,
  getParticularRouteCard,
  getLanguages
};
