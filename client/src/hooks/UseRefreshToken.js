import axios from '../api/Axios';

function UseRefreshToken() {
    // const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/refresh-token', {
            withCredentials: true
        });
        // setAuth(prev => {
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.accessToken);
        //     return { ...prev, accessToken: response.data.accessToken }
        // });
        return response.data.accessToken;
    }
    return refresh;
}

export default UseRefreshToken