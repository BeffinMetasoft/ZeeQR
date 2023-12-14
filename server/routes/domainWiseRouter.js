const router = require('express').Router()
const { getParticularRouteCard, addLocations } = require('../controllers/cardController')




router.post('/profileView/:id', getParticularRouteCard)   //Route Basics profile view interface
router.post('/add-location/:id', addLocations)   //add business card location



module.exports = router