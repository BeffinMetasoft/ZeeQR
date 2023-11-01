import axios from '../api/Axios'


export const cardProfile = (id) => axios.post(`/profileView/${id}`)  //profile view interface

export const reviewQrInterface = (id) => axios.get(`/reviewQr-interface/${id}`)  //  review QR card

export const addLocation = (id,liveLocation) => axios.post(`/add-location/${id}`,liveLocation)  //add location
