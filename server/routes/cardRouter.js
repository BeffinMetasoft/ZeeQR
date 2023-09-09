const router = require('express').Router()
const {  getSingleCard, addLocations} = require('../controllers/cardController')



router.post('/profileView/:id', getSingleCard)   //profile view interface
router.post('/add-location/:id', addLocations)   //add location



module.exports = router