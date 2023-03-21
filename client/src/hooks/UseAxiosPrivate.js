import  axiosPrivate  from "../api/Axios";
import { useEffect } from "react";
// import useRefreshToken from "./useRefreshToken";
import UseRefreshToken from "./UseRefreshToken";
// import useAuth from "./useAuth";

function UseAxiosPrivate() {
    const refresh = UseRefreshToken();
   
    // const { auth } = useAuth();

    useEffect(() => {
        console.log('hai');
        const requestIntercept = axiosPrivate;

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [ refresh])

    return axiosPrivate;
}

export default UseAxiosPrivate