const CardModel = require("../model/cardModel");
const SavedCardModel = require("../model/savedCardModel");
const createError = require("http-errors");
const createHttpError = require("http-errors");
const mongoose = require("mongoose");
const { uploadFile, deleteFile } = require("../helpers/s3");
const { generateQR } = require("../helpers/qrCodeGenerator");
const crypto = require("crypto");

const vCardsJS = require('vcards-js')
const fs = require('fs');

const S3Url = process.env.AWS_BUCKET_URL
const QRBase = process.env.QR_CODE_BASE_URL

const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString("hex");



/* -------------------------- saved card Controller ------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                        create a new card Controller                        */
/* -------------------------------------------------------------------------- */

const createCard = async (req, res, next) => {
  // console.log(req.files.hightlightPhotos, 'qwer');
  // console.log(req.body);
  const backgroundImage = req.files?.backgroundImage ? req.files?.backgroundImage[0] : ''
  const profileImage = req.files?.profileImage ? req.files?.profileImage[0] : ''
  const companyLogo = req.files?.companyLogo ? req.files?.companyLogo[0] : ''
  const websiteImage = req.files?.websiteImage ? req.files?.websiteImage[0] : ''
  const hightlightPhotos = req.files?.hightlightPhotos ? req.files?.hightlightPhotos : ''

  // const hightlightPhotos1 = req.files?.hightlightPhotos1 ? req.files?.hightlightPhotos1[0] : ''
  // const hightlightPhotos2 = req.files?.hightlightPhotos2 ? req.files?.hightlightPhotos2[0] : ''
  // const hightlightPhotos3 = req.files?.hightlightPhotos3 ? req.files?.hightlightPhotos3[0] : ''
  // const hightlightPhotos4 = req.files?.hightlightPhotos4 ? req.files?.hightlightPhotos4[0] : ''


  const backgroundImageName = backgroundImage ? generateFileName() :''
  backgroundImage ? await uploadFile(backgroundImage.buffer, backgroundImageName, backgroundImage.mimetype) : ''

  const profileImageName = profileImage ? generateFileName() : ''
  profileImage ? await uploadFile(profileImage.buffer, profileImageName, profileImage.mimetype) : ''

  const companyLogoName = companyLogo ? generateFileName() : ''
  companyLogo ? await uploadFile(companyLogo.buffer, companyLogoName, companyLogo.mimetype) : ''

  const websiteImageName = websiteImage ? generateFileName() : ''
  websiteImage ? await uploadFile(websiteImage.buffer, websiteImageName, websiteImage.mimetype) : ''

  // const hightlightPhotosName1 = hightlightPhotos1 ? generateFileName() : ''
  // hightlightPhotos1 ? await uploadFile(hightlightPhotos1.buffer, hightlightPhotosName1, hightlightPhotos1.mimetype) : ''
  // const hightlightPhotosName2 = hightlightPhotos2 ? generateFileName() : ''
  // hightlightPhotos2 ? await uploadFile(hightlightPhotos2.buffer, hightlightPhotosName2, hightlightPhotos2.mimetype) : ''
  // const hightlightPhotosName3 = hightlightPhotos3 ? generateFileName() : ''
  // hightlightPhotos3 ? await uploadFile(hightlightPhotos3.buffer, hightlightPhotosName3, hightlightPhotos3.mimetype) : ''
  // const hightlightPhotosName4 = hightlightPhotos4 ? generateFileName() : ''
  // hightlightPhotos4 ? await uploadFile(hightlightPhotos4.buffer, hightlightPhotosName4, hightlightPhotos4.mimetype) : ''
  

  const array = []
  const photoNameArray = []

  if (hightlightPhotos) {
    for (let i = 0; i < hightlightPhotos.length; i++) {
      const hightlightPhotosName = generateFileName()
      array.push(hightlightPhotosName)

      await uploadFile(hightlightPhotos[i].buffer, array[i], hightlightPhotos[i].mimetype);
    }
    for (let i = 0; i < array.length; i++) {
      photoNameArray.push(S3Url + array[i])
    }
  }


  const CardData = {

    companyName: req.body.companyName,
    companyDesignation: req.body.companyDesignation,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    about: req.body.about,
    whatsappNumber: req.body.whatsappNumber,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    twitter: req.body.twitter,
    linkedin: req.body.linkedIn,
    skype: req.body.skype,
    youtube: req.body.youtube,
    address: req.body.address,
    state: req.body.state,
    country: req.body.country,
    websiteUrl: req.body.websiteUrl,
    websiteName: req.body.websiteName,
    locationUrl: req.body.locationUrl,
    backgroundImage:backgroundImage ? S3Url + backgroundImageName : '',
    profileImage:profileImage ? S3Url + profileImageName : '',
    companyLogo: companyLogo ? S3Url + companyLogoName : '',
    websiteImage:websiteImage ? S3Url + websiteImageName : '',
    highlightPhotos: photoNameArray,
    // hightlightPhotos:{
    //   hightlightPhotos1:hightlightPhotos1 ? S3Url + hightlightPhotosName1 : '',
    //   hightlightPhotos2:hightlightPhotos2 ? S3Url + hightlightPhotosName2 : '',
    //   hightlightPhotos3:hightlightPhotos3 ? S3Url + hightlightPhotosName3 : '',
    //   hightlightPhotos4:hightlightPhotos4 ? S3Url + hightlightPhotosName4 : '',
    // },
    colorCode: req.body.colorCode,
    theme:req.body.theme,
    userID: req.user._id,
  };


  // Create a new vCard object and set contact information
  const card = vCardsJS();
  card.firstName = CardData.name;
  // card.lastName = 'Doe';
  card.organization = CardData.companyName;
  card.title = CardData.companyDesignation;
  card.email = CardData.email;
  card.workPhone = '+' + CardData.phone;
  card.url = CardData.websiteUrl


  // Set the image URL
  const imageUrl = CardData.profileImage;
  card.photo.attachFromUrl(imageUrl)

  // card.photo.embedFromString(imageUrl, 'image/png');

  // // Download the image and convert it to a base64-encoded string 
  // const imageBuffer =  imageUrl
  // const imageBase64 = imageBuffer.toString('base64');

  // // Attach the image as a base64-encoded string to the vCard
  // card.photo.attachFromUrl(imageBase64, 'JPEG', { encoding: 'b' });

  // Generate vCard string and save to file
  const vcardString = card.getFormattedString()


  // Save file to database and get download link
  const downloadLink = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcardString)}`;
  console.log(vcardString, '1234567891234567');

  // Save the downloadLink to your database along with any other relevant information
  CardData.vCard = downloadLink


  const newCard = new CardModel(CardData);
  newCard._id = mongoose.Types.ObjectId();
  const URL = QRBase + newCard._id;
  const QRCode = await generateQR(URL);
  newCard.QRCode = QRCode;

  try {
    await newCard.save();
    res.status(200).json({ success: true, newCard });
  } catch (error) {
    console.log(error);
    next(error);
  }

};

/* -------------------------------------------------------------------------- */
/*                          getting all booked cards                          */
/* -------------------------------------------------------------------------- */

const getCard = async (req, res, next) => {
  try {
    const card = await CardModel.find({ userID: req.user._id }).sort({ date: -1 });

    res.status(200).json({ success: true, card, message: "Booked Card" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* -------------------------------------------------------------------------- */
/*                    delete the booked card to the trash                    */
/* -------------------------------------------------------------------------- */

const deletBookedCard = async (req, res, next) => {
  // console.log(req.params.id);
  try {
    const card = await CardModel.findByIdAndUpdate({ _id: req.params.id }, { $set: { status: "delete" } })
    if (card) {

      res.status(200).json({ success: true, message: "deleted" })
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                        Eidt the details of the cards                       */
/* -------------------------------------------------------------------------- */

const editBookedCard = async (req, res, next) => {
  const cardId = req.params.id;
  // console.log(cardId);
  // console.log(req.files)
  console.log(req.body, '++++');

  const bgImage = req.files?.bgImage ? req.files?.bgImage[0] : ''
  const pfImage = req.files?.pfImage ? req.files?.pfImage[0] : ''
  const companyLg = req.files?.companyLg ? req.files?.companyLg[0] : ''
  const wbImage = req.files?.wbImage ? req.files?.wbImage[0] : ''
  const hgPhotos = req.files?.hgPhotos ? req.files?.hgPhotos : ''

  const savedcard = await CardModel.findById(cardId);

  const bgImageName = bgImage ? generateFileName() : ''
  if (bgImage) {
    const oldBgImage = savedcard.backgroundImage
    const array = oldBgImage.split("/");
    const bgOldImg = array[array.length - 1]
    await deleteFile(bgOldImg)
    await uploadFile(bgImage.buffer, bgImageName, bgImage.mimetype)
  }

  const pfImageName = pfImage ? generateFileName() : ''
  if (pfImage) {
    const oldPfImage = savedcard.profileImage
    const array = oldPfImage.split("/");
    const pfOldImg = array[array.length - 1]
    await deleteFile(pfOldImg)
    await uploadFile(pfImage.buffer, pfImageName, pfImage.mimetype)
  }

  const companyLgName = companyLg ? generateFileName() : ''
  if (companyLg) {
    const oldCompanyLg = savedcard.companyLogo
    const array = oldCompanyLg.split("/");
    const companyLgOld = array[array.length - 1]
    await deleteFile(companyLgOld)
    await uploadFile(companyLg.buffer, companyLgName, companyLg.mimetype)
  }

  const wbImageName = wbImage ? generateFileName() : ''
  if (wbImage) {
    const oldWbImage = savedcard.websiteImage
    const array = oldWbImage.split("/");
    const wbOldImage = array[array.length - 1]
    await deleteFile(wbOldImage)
    await uploadFile(wbImage.buffer, wbImageName, wbImage.mimetype)
  }

  const array = []
  const photoNameArray = []
  if (hgPhotos) {

    const oldHgPhotos = savedcard.highlightPhotos
    for (let i = 0; i < oldHgPhotos.length; i++) {
      const array = oldHgPhotos[i].split("/");
      const hgOldPhotos = array[array.length - 1]
      await deleteFile(hgOldPhotos)
    }

    for (let i = 0; i < hgPhotos.length; i++) {
      const hgPhotosName = generateFileName()
      array.push(hgPhotosName)
      await uploadFile(hgPhotos[i].buffer, array[i], hgPhotos[i].mimetype);
    }

    for (let i = 0; i < array.length; i++) {
      photoNameArray.push(S3Url + array[i])
    }

  }


  try {
    const CardData = {

      companyName: req.body.companyName,
      companyDesignation: req.body.companyDesignation,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      about: req.body.about,
      whatsappNumber: req.body.whatsappNumber,
      facebook: req.body.facebook,
      instagram: req.body.instagram,
      twitter: req.body.twitter,
      linkedin: req.body.linkedIn,
      skype: req.body.skype,
      youtube: req.body.youtube,
      address: req.body.address,
      state: req.body.state,
      country: req.body.country,
      websiteUrl: req.body.websiteUrl,
      websiteName: req.body.websiteName,
      locationUrl: req.body.locationUrl,
      colorCode: req.body.colorCode,
      theme:req.body.theme,
      checkLogo:req.body.checkLogo[0] === "undefined" ?  savedcard.checkLogo : req.body.checkLogo[0] ,
      checkHighlight:req.body.checkHighlight[0] === "undefined" ?  savedcard.checkHighlight : req.body.checkHighlight[0] ,
      checkProfile:req.body.checkProfile[0] === "undefined" ?  savedcard.checkProfile : req.body.checkProfile[0] ,

      backgroundImage: bgImage ? S3Url + bgImageName : req.body.backgroundImage,
      profileImage: pfImage ? S3Url + pfImageName : req.body.profileImage,
      companyLogo: companyLg ? S3Url + companyLgName : req.body.companyLogo,
      websiteImage: wbImage ? S3Url + wbImageName : req.body.websiteImage,
      highlightPhotos: hgPhotos ? photoNameArray : savedcard.highlightPhotos,

      userID: req.user._id,
    };

    // Create a new vCard object and set contact information
    const card = vCardsJS();
    card.firstName = CardData.name;
    card.organization = CardData.companyName;
    card.title = CardData.companyDesignation;
    card.email = CardData.email;
    card.workPhone = '+' + CardData.phone;
    card.url = CardData.websiteUrl

    // Set the image URL
    const imageUrl = CardData.profileImage;
    card.photo.attachFromUrl(imageUrl)

    // Generate vCard string and save to file
    const vcardString = card.getFormattedString()

    // Save file to database and get download link
    const downloadLink = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcardString)}`;
    // console.log(vcardString, '1234567891234567');

    // Save the downloadLink to your database along with any other relevant information
    CardData.vCard = downloadLink


    if (savedcard.userID == req.user._id) {
      await savedcard.updateOne(CardData);
      res.status(200).json({ success: true, message: "card updated" });
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                         get the single card details                        */
/* -------------------------------------------------------------------------- */

const getSingleCard = async (req, res, next) => {
  try {
    // const card = await CardModel.findOne({ _id: req.params.id });
    const card = await CardModel.findOne({ $and: [{ _id: req.params.id }, { block: false }] });
    // const QRCode = await generateQR('https://zeeqr.info/profile-view/641eb3995cc9b4462a832959');
    //  console.log( card,'qwert123');
    res
      .status(200)
      .json({ success: true, card, message: "Single Booked Card" });

  } catch (error) {
    console.log(error);
    next(error);
  }
};

/* -------------------------- Admin card Controller ------------------------- */

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
  deletBookedCard,
  editBookedCard,

  getAllCard,
  updateCardStatus,
};
