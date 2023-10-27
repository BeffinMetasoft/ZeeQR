const { useContext } = require("react")
const { CardContext } = require("../../store/CardContext")




function SocialMediaValid() {
  const [cardData] = useContext(CardContext)

  const {

    socialMediaDetails,
    SMediaPostion,

  } = cardData

  if ((socialMediaDetails?.facebook ||
    socialMediaDetails?.whatsappNumber ||
    socialMediaDetails?.linkedin ||
    socialMediaDetails?.instagram ||
    socialMediaDetails?.twitter ||
    socialMediaDetails?.skype ||
    socialMediaDetails?.tiktok ||
    socialMediaDetails?.youtube ||
    socialMediaDetails?.snapchat ||
    socialMediaDetails?.companyProfile) && (SMediaPostion?.pos1 || SMediaPostion?.pos2 || SMediaPostion?.pos3 || SMediaPostion?.pos4 || SMediaPostion?.pos5 || SMediaPostion?.pos6 || SMediaPostion?.pos7 || SMediaPostion?.pos8 || SMediaPostion?.pos9 || SMediaPostion?.pos10)

  ) {
    return true
  } else {

    return false
  }
}

function HighlightImageValid() {
  const [cardData] = useContext(CardContext)

  const {

    highlightPhotos1,
    highlightPhotos2,
    highlightPhotos3,
    highlightPhotos4,
    highlightPhotos5,
    highlightPhotos6,
    highlightPhotos7,
    highlightPhotos8,
    checkHighlight

  } = cardData

  if ((highlightPhotos1 ||highlightPhotos2 ||highlightPhotos3 ||
    highlightPhotos4 ||highlightPhotos5 ||highlightPhotos6 ||
    highlightPhotos7 ||highlightPhotos8) && checkHighlight) {
    return true
  } else {

    return false
  }
}

module.exports = { SocialMediaValid, HighlightImageValid }