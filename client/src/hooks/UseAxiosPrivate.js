import  axiosPrivate  from "../api/Axios";
import { useEffect } from "react";
import UseRefreshToken from "./UseRefreshToken";

function UseAxiosPrivate() {
    const refresh = UseRefreshToken();
   

    useEffect(() => {
        // console.log('hai');
        const requestIntercept = axiosPrivate;

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    await refresh();
                    // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
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