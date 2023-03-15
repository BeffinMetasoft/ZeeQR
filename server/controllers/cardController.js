const CardModel = require("../model/cardModel");
const SavedCardModel = require("../model/savedCardModel");
const createError = require("http-errors");
const createHttpError = require("http-errors");
const mongoose = require("mongoose");
const { uploadFile } = require("../helpers/s3");
const { generateQR } = require("../helpers/qrCodeGenerator");
const crypto = require("crypto");
require("dotenv").config();

const S3Url = process.env.AWS_BUCKET_URL
const QRBase = process.env.QR_CODE_BASE_URL

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

//saved card Controller

const saveCard = async (req, res, next) => {
  const file = req.file;
  const imageName = generateFileName();
  await uploadFile(file.buffer, imageName, file.mimetype);

  const CardData = {
    cardModel: req.body.cardModel,
    logoURL: imageName,
    companyName: req.body.companyName,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    websiteUrl: req.body.websiteUrl,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    linkedin: req.body.linkedin,
    shippingDetails: {
      name: req.body.shippingName,
      address: req.body.shippingAddress,
      zipCode: req.body.zipcode,
      state: req.body.state,
      country: req.body.country,
      landmark: req.body.landmark,
    },
    userID: req.user._id,
  };

  const newCard = new SavedCardModel(CardData);
  newCard._id = mongoose.Types.ObjectId();
  try {
    await newCard.save();
    res.status(200).json({ success: true, newCard, message: " Card Saved" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSavedCard = async (req, res, next) => {
  try {
    const card = await SavedCardModel.find({ userID: req.user._id });

    res.status(200).json({ success: true, card, message: "Saved Cards" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSingleSavedCard = async (req, res, next) => {
  try {
    const card = await SavedCardModel.findOne({ _id: req.params.id });

    res.status(200).json({ success: true, card, message: "Single Saved Card" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateCard = async (req, res, next) => {
  const cardId = req.params.id;
  try {
    const savedcard = await SavedCardModel.findById(cardId);
    console.log(savedcard);
    if (savedcard.userID == req.user._id) {
      await savedcard.update(req.body);
      res.status(200).json({ success: true, message: "card updated" });
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const removeCard = async (req, res, next) => {
  try {
    const card = await SavedCardModel.findById(req.params.id);

    if (card.userID == req.user._id) {
      await card.deleteOne();
      res.status(200).json({ success: true, message: "card Removed" });
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//create card Controller

const createCard = async (req, res, next) => {
  console.log(req.files.hightlightPhotos, 'qwer');
  console.log(req.body);
  const backgroundImage = req.files?.backgroundImage[0]
  const profileImage = req.files?.profileImage[0]
  const companyLogo = req.files?.companyLogo[0]
  const websiteImage = req.files?.websiteImage[0]
  const hightlightPhotos = req.files?.hightlightPhotos
 

  const backgroundImageName = generateFileName();
  await uploadFile(backgroundImage.buffer, backgroundImageName, backgroundImage.mimetype);
  const profileImageName = generateFileName();
  await uploadFile(profileImage.buffer, profileImageName, profileImage.mimetype);
  const companyLogoName = generateFileName();
  await uploadFile(companyLogo.buffer, companyLogoName, companyLogo.mimetype);
  const websiteImageName = generateFileName();
  await uploadFile(websiteImage.buffer, websiteImageName, websiteImage.mimetype);
 const  hightlightPhotosName1 = generateFileName()
 const  hightlightPhotosName2 = generateFileName()
 const  hightlightPhotosName3 = generateFileName()
 const  hightlightPhotosName4 = generateFileName()
  const hightlightPhotosName =[
    hightlightPhotosName1,
    hightlightPhotosName2,
    hightlightPhotosName3,
    hightlightPhotosName4,
  ]
  for (let i = 0; i < hightlightPhotos.length; i++) {
   
    await uploadFile(hightlightPhotos[i].buffer, hightlightPhotosName[i], hightlightPhotos[i].mimetype);
  }
  console.log(hightlightPhotosName,'12345678');

  const CardData = {

    companyName: req.body.companyName,
    companyDesignation: req.body.companyDesignation,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    about: req.body.about,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    linkedin: req.body.linkedIn,
    skype: req.body.skype,
    youtube: req.body.youtube,
    address: req.body.address,
    state: req.body.state, 
    country: req.body.country,
    websiteUrl:req.body.websiteUrl,
    websiteName:req.body.websiteName,
    backgroundImage: S3Url + backgroundImageName,
    profileImage:S3Url + profileImageName,
    companyLogo:S3Url + companyLogoName,
    websiteImage:S3Url + websiteImageName,
    highlightPhotos:[
      S3Url +hightlightPhotosName1,
      S3Url +hightlightPhotosName2,
      S3Url +hightlightPhotosName3,
      S3Url +hightlightPhotosName4,
    ],
    
    userID: req.user._id,
  };

  const newCard = new CardModel(CardData);
  newCard._id = mongoose.Types.ObjectId();
  const URL = QRBase + newCard._id;
  console.log("URL", URL);
  const QRCode = await generateQR(URL);
  newCard.QRCode = QRCode;
  console.log("newCard", newCard);
  try {
    await newCard.save();
    res.status(200).json(newCard);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getCard = async (req, res, next) => {
  try {
    const card = await CardModel.find({ userID: req.user._id });

    res.status(200).json({ success: true, card, message: "Booked Card" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getSingleCard = async (req, res, next) => {
  try {
    const card = await CardModel.findOne({ _id: req.params.id });

    res
      .status(200)
      .json({ success: true, card, message: "Single Booked Card" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//Admin card Controller

const getAllCard = async (req, res, next) => {
  try {
    if ("640706d85e745adee6a75d89" == req.user._id) {
      const card = await CardModel.find();

      res.status(200).json({ success: true, card, message: "All Cards" });
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateCardStatus = async (req, res, next) => {
  const cardId = req.params.id;
  try {
    const bookedcard = await CardModel.findById(cardId);

    if ("640706d85e745adee6a75d89" == req.user._id) {
      await bookedcard.updateOne({ $set: { status: req.body.status } });
      res.status(200).json({ success: true, message: "card status updated" });
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  saveCard,
  getSavedCard,
  getSingleSavedCard,
  updateCard,
  removeCard,

  createCard,
  getCard,
  getSingleCard,

  getAllCard,
  updateCardStatus,
};
