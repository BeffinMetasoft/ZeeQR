const router = require('express').Router()
const { saveCard, getSavedCard, getSingleSavedCard, getCard, getSingleCard, getAllCard, createCard, updateCard, removeCard, updateCardStatus, deletBookedCard,  editBookedCard } = require('../controllers/cardController')
const { verifyJwt } = require('../middleware/verify_jwt')
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


//saved card routes
router.post('/saveCard', verifyJwt,upload.single('image'), saveCard)
router.get('/getSavedCard', verifyJwt, getSavedCard)
router.get('/getSingleSavedCard/:id', verifyJwt, getSingleSavedCard)
router.put('/updateCard/:id', verifyJwt, updateCard)
router.delete('/removeCard/:id', verifyJwt, removeCard)

//book card routes
router.post('/createCard', verifyJwt,upload.fields([
    {name:'backgroundImage',maxCount:1},
    {name:'profileImage',maxCount:1},
    {name:'companyLogo',maxCount:1},
    {name:'websiteImage',maxCount:1},
    {name:'hightlightPhotos',maxCount:4},
]), createCard)
router.get('/getcreatedCard', verifyJwt, getCard)
router.post('/removeBookedCard/:id',verifyJwt,deletBookedCard)
router.post('/editBookedCard/:id',verifyJwt,upload.fields([
    {name:'bgImage',maxCount:1},
    {name:'pfImage',maxCount:1},
    {name:'companyLg',maxCount:1},
    {name:'wbImage',maxCount:1},
    {name:'hgPhotos',maxCount:4},
]),editBookedCard)
router.get('/getSingleCard/:id',verifyJwt, getSingleCard)
router.get('/profileView/:id', getSingleCard)

//admin routes
router.get('/getAllCard', verifyJwt, getAllCard)
router.put('/updateStatusCard/:id', verifyJwt, updateCardStatus)


module.exports = router