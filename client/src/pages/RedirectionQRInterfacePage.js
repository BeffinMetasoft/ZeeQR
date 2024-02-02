import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addRedirectionQrLocation, redirectionQrInterface } from '../api/UserRequest'
import logo from '../assests/zeeqr-black.svg'
import axios from 'axios'


function RedirectionQRInterfacePage() {
    const params = useParams()
    const [redirectionQR, setRedirectionQR] = useState(false)
    useEffect(() => {
        const getRedirectionQRDetails = async () => {
            try {
                const path = {
                    url: window.location.href
                }
                const { data } = await redirectionQrInterface(params.id,path)
                // console.log(data);
                if (data.success) {
                    setRedirectionQR(false)
                    const liveLocation = await axios.get('https://ipapi.co/json')
                    await addRedirectionQrLocation(data.redirectionQR._id, liveLocation.data)

                    window.location.href = data?.redirectionQR?.redirectionUrl

                } else {
                    setRedirectionQR(true)
                }

            } catch (error) {
                // console.log(error);
                setRedirectionQR(true)
            }
        }
        getRedirectionQRDetails()
    }, [])
    return (
        <div>
            {redirectionQR ?
                <div className='w-full h-screen flex flex-col items-center justify-center'>
                    <img src={logo} alt="" />
                    <h1 className='font-bold mt-2'>This card is not valid/card has expired!</h1>
                    <p className='mt-1'>Please contact the admin</p>
                    <Link to={'https://wa.me/+971505363704?text=Hi%2C'} target="blank" >
                        <button className='p-2 mt-3 border-2 rounded-xl border-black'>Get In Touch</button>
                    </Link>
                </div>
                : ''
            }
        </div>
    )
}

export default RedirectionQRInterfacePage