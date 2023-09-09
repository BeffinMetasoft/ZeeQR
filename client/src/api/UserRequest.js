import axios from '../api/Axios'


export const cardProfile = (id) => axios.post(`/profileView/${id}`)  //profile view interface
export const addLocation = (id,liveLocation) => axios.post(`/add-location/${id}`,liveLocation)  //add location
