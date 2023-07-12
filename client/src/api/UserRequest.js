import axios from '../api/Axios'
// import UseAxiosPrivate from '../hooks/UseAxiosPrivate'
import { axiosPrivate } from './AxiosPrivate'



export const userSignup = (signupData) => axios.post('/signup',signupData)

export const userLogin = (loginData) => axios.post('/login',loginData)

export const UploadDetails = (details) => axios.post('/saveCard',details)

export const createCard = (details) => axiosPrivate.post('/createCard',details)

export const cardProfile = (id,liveLocation) => axios.post(`/profileView/${id}`,liveLocation)  //profile view interface

export const getSavedCards = () => axiosPrivate.get('/getSavedCard')

export const getBookedCards = () => axiosPrivate.get('/getcreatedCard')

export const userDetails = () => axiosPrivate.get('/profile')

export const userDetailsUpdate = (profile) => axiosPrivate.put('/update',profile)

export const deleteSavedCard = (cardId) => axiosPrivate.post(`/removeBookedCard/${cardId}`)

export const getSigleCardData = (cardId) => axios.get(`/getSingleCard/${cardId}`)

export const UpdateBookedCard = (cardId,datas) => axiosPrivate.post(`/editBookedCard/${cardId}`,datas)

export const userLogout = (refToken) => axios.post('/logout',{refToken})
