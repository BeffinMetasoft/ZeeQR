import { useLocation, useNavigate } from 'react-router';
import axios from '../api/Axios';
import swal from 'sweetalert';

function UseRefreshToken() {
    // const { setAuth } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()


    const refresh = async () => {
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
            swal({
                title: error.response.data.message.name,
                text: error.message + " (Please login again...)",

            }).then(() => {

                localStorage.removeItem('refToken')
                navigate('/login', { state: { from: location }, replace: true })
            })

        }
        // setAuth(prev => {
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.accessToken);
        //     return { ...prev, accessToken: response.data.accessToken }
        // });
        // return response.data;
    }
    return refresh;
}

export default UseRefreshToken