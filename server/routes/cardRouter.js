const router = require('express').Router()
const { getSingleCard, addLocations, reviewQrDetails, contactCardDetails, addContactCardLocations, addReviewCardLocations } = require('../controllers/cardController')



router.post('/profileView/:id', getSingleCard)   //profile view interface
router.get('/reviewQr-interface/:id', reviewQrDetails)   //interface view
router.get('/contactCard-interface/:id', contactCardDetails)   //contact interface view

router.post('/add-location/:id', addLocations)   //add business card location
router.post('/addReview-location/:id', addReviewCardLocations)   //add review card location
router.post('/addContactCard-location/:id', addContactCardLocations)   //add contact card location



module.exports = router