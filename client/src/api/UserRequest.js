import axios from '../api/Axios'


export const cardProfile = (id) => axios.post(`/profileView/${id}`)  //profile view interface

export const reviewQrInterface = (id) => axios.get(`/reviewQr-interface/${id}`)  //  review QR card

export const contactCardInterface = (id) => axios.get(`/contactCard-interface/${id}`)  //  contact interface


export const addLocation = (id,liveLocation) => axios.post(`/add-location/${id}`,liveLocation)  //add business card location

export const addReviewLocation = (id,liveLocation) => axios.post(`/addReview-location/${id}`,liveLocation)  //add Review card location

export const addContactCardLocation = (id,liveLocation) => axios.post(`/addContactCard-location/${id}`,liveLocation)  //add Contact card location
