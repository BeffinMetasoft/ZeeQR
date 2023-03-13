import axios from '../api/Axios'

export const userSignup = (signupData) => axios.post('/signup',signupData)

export const userLogin = (loginData) => axios.post('/login',loginData)

export const UploadDetails = (details) => axios.post('/saveCard',details)

export const createCard = (details) => axios.post('/createCard',details)

export const cardProfile = (id) => axios.get(`/getcreatedSingleCard/${id}`)

export const getSavedCards = () => axios.get('/getSavedCard')

export const getBookedCards = () => axios.get('/getcreatedCard')

export const userDetails = () => axios.get('/profile')

export const userDetailsUpdate = (profile) => axios.put('/update',profile)

export const deleteSavedCard = (cardId) => axios.delete(`/removeCard/${cardId}`)

export const userLogout = (refToken) => axios.post('/logout',{refToken})
