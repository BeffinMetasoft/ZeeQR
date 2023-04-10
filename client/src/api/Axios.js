import axios from "axios";


export default axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_AXIOS,
   
})

// export const axiosPrivate = axios.create({
//     baseURL: process.env.REACT_APP_API_AXIOS,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });



