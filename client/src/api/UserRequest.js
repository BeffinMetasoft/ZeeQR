import axios from '../api/Axios'


export const cardProfile = (id,path) => axios.post(`/profileView/${id}`,path )  //profile view interface

// export const RouteBasicCardProfile = (id,path) => axios.post(`/profile/${id}`,path)  // Route basic profile view interface

export const reviewQrInterface = (id) => axios.get(`/reviewQr-interface/${id}`)  //  review QR card

export const contactCardInterface = (id) => axios.get(`/contactCard-interface/${id}`)  //  contact interface


export const addLocation = (id,liveLocation) => axios.post(`/add-location/${id}`,liveLocation)  //add business card location

export const addReviewLocation = (id,liveLocation) => axios.post(`/addReview-location/${id}`,liveLocation)  //add Review card location

export const addContactCardLocation = (id,liveLocation) => axios.post(`/addContactCard-location/${id}`,liveLocation)  //add Contact card location
