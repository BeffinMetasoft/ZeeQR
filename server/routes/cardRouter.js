const router = require('express').Router()
const {  getSingleCard, addLocations, reviewQrDetails} = require('../controllers/cardController')



router.post('/profileView/:id', getSingleCard)   //profile view interface
router.get('/reviewQr-interface/:id', reviewQrDetails)   //interface view
router.post('/add-location/:id', addLocations)   //add location



module.exports = router