const router = require('express').Router()
const {  getSingleCard} = require('../controllers/cardController')



router.post('/profileView/:id', getSingleCard)   //profile view interface



module.exports = router