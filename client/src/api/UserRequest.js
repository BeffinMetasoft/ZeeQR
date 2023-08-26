import axios from '../api/Axios'


export const cardProfile = (id,liveLocation) => axios.post(`/profileView/${id}`,liveLocation)  //profile view interface
