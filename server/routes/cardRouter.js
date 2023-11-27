const router = require('express').Router()
const { getSingleCard, addLocations, reviewQrDetails, contactCardDetails, addContactCardLocations, addReviewCardLocations } = require('../controllers/cardController')
const { verifyDomain } = require('../middleware/verify_domain')



router.post('/profileView/:id',verifyDomain, getSingleCard)   //profile view interface
router.get('/reviewQr-interface/:id', reviewQrDetails)   //interface view
router.get('/contactCard-interface/:id', contactCardDetails)   //contact interface view

router.post('/add-location/:id', addLocations)   //add business card location
router.post('/addReview-location/:id', addReviewCardLocations)   //add review card location
router.post('/addContactCard-location/:id', addContactCardLocations)   //add contact card location



module.exports = router