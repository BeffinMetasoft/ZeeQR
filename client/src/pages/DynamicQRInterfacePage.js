import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {  addRedirectionQrLocation, dynamicQrInterface } from '../api/UserRequest'
import logo from '../assests/zeeqr-black.svg'
import axios from 'axios'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'


function DynamicQRInterfacePage() {
    const params = useParams()
    const [dynamicQR, setDynamicQR] = useState(false)
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const getDynamicQRDetails = async () => {
            try {
                const path = {
                    url: window.location.href
                }
                const { data } = await dynamicQrInterface(params.id, path)
                // console.log(data);
                if (data.success) {
                    setDynamicQR(false)
                    setLoader(false)
                    const liveLocation = await axios.get('https://ipapi.co/json')
                    await addRedirectionQrLocation(data.dynamicQR._id, liveLocation.data)

                    window.location.href = data?.dynamicQR?.redirectionUrl

                } else {
                    setDynamicQR(true)
                    setLoader(false)
                }

            } catch (error) {
                // console.log(error);
                setDynamicQR(true)
                setLoader(false)
            }
        }
        getDynamicQRDetails()
    }, [])
    return (
        <div className='w-full h-screen flex items-center justify-center' >
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 60,
                            color: 'black'
                        }}
                        spin
                    />
                }
                spinning={loader}
            >
                {dynamicQR ?
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
            </Spin>
        </div>
    )
}

export default DynamicQRInterfacePage