const router = require('express').Router()
const { getSingleCard, addLocations, reviewQrDetails, contactCardDetails, addContactCardLocations, addReviewCardLocations, getLanguages, redirectioQrDetails, addRedirectionQrLocations, dynamicQrDetails } = require('../controllers/cardController')
const { verifyUrlQRDomain } = require('../middleware/verifyUrlQR_domain')
const { verifyDomain } = require('../middleware/verify_domain')



router.post('/profileView/:id',verifyDomain, getSingleCard)   //profile view interface
router.get('/reviewQr-interface/:id', reviewQrDetails)   //interface view
router.get('/contactCard-interface/:id', contactCardDetails)   //contact interface view
router.post('/redirectionQr-interface/:id',verifyUrlQRDomain, redirectioQrDetails)   //redirection interface view
router.post('/dynamicQr-interface/:id',verifyUrlQRDomain, dynamicQrDetails)   //dynamicQr interface view

router.post('/add-location/:id', addLocations)   //add business card location
router.post('/addReview-location/:id', addReviewCardLocations)   //add review card location
router.post('/addContactCard-location/:id', addContactCardLocations)   //add contact card location
router.post('/addRedirectionQr-location/:id', addRedirectionQrLocations)   //add contact card location
// router.post('/addDynamicQr-location/:id', addDynamicQrLocations)   //add dynamic card location

router.get('/language/:lng', getLanguages) // get languages


module.exports = router