import axios from '../api/Axios'
// import UseAxiosPrivate from '../hooks/UseAxiosPrivate'



export const userSignup = (signupData) => axios.post('/signup',signupData)

export const userLogin = (loginData) => axios.post('/login',loginData)

export const UploadDetails = (details) => axios.post('/saveCard',details)

export const createCard = (details) => axios.post('/createCard',details)

export const cardProfile = (id) => axios.get(`/profileView/${id}`)

// export const getSavedCards = () =>{
//     const axiosPrivate = UseAxiosPrivate()
//     axiosPrivate.get('/getSavedCard')
// } 

export const getBookedCards = () => axios.get('/getcreatedCard')

export const userDetails = () => axios.get('/profile')

export const userDetailsUpdate = (profile) => axios.put('/update',profile)

export const deleteSavedCard = (cardId) => axios.post(`/removeBookedCard/${cardId}`)

export const getSigleCardData = (cardId) => axios.get(`/getSingleCard/${cardId}`)

export const UpdateBookedCard = (cardId,datas) => axios.post(`/editBookedCard/${cardId}`,datas)

export const userLogout = (refToken) => axios.post('/logout',{refToken})
