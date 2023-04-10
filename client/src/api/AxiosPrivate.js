import axios from "../api/Axios"
import Swal from 'sweetalert2'
// import { useLocation, useNavigate } from 'react-router';

// const navigate = useNavigate()
// const location = useLocation()




export const axiosPrivate = axios.create({})

axiosPrivate.interceptors.response.use((response) => {
    return response
},
    async (error) => {
        if (error.response.status === 401) {
            try {

                const refToken = await localStorage.getItem("refToken")
                const response = await axios.post('/refresh-token', { refToken }, {
                    withCredentials: true
                });
                console.log(response, 'refreshed');
                console.log(response.data, 'refreshed');
                console.log(response.data.refreshToken, 'refreshed');
                if (response.data.success) {
                    console.log('hhaaa');
                    localStorage.setItem("refToken", response.data.refreshToken)
                }
            } catch (error) {
                console.log(error, 'qwerty');
                Swal.fire({
                    title: error.response.data.message.name,
                    text: error.message + " (Please login again...)",

                }).then(() => {

                    localStorage.removeItem('refToken')

                    // navigate('/login', { state: { from: location }, replace: true })
                    window.location.href = '/login'
                })
                return Promise.reject(error)
            }
            return axios(error.config)
        }
        return Promise.reject(error)
    }
)