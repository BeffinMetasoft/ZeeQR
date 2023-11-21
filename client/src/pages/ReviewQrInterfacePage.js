import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addReviewLocation, reviewQrInterface } from '../api/UserRequest'
import logo from '../assests/zeeqr-black.svg'
import axios from 'axios'


function ReviewQrInterfacePage() {
    const params = useParams()
    const [review, setReview] = useState(false)
    useEffect(() => {
        const getReviewQRDetails = async () => {
            try {
                const { data } = await reviewQrInterface(params.id)
                // console.log(data);
                if (data.success) {
                    setReview(false)
                    const liveLocation = await axios.get('https://ipapi.co/json')
                    await addReviewLocation(data.review._id, liveLocation.data)

                    window.location.href = data?.review?.reviewUrl
                    
                } else {
                    setReview(true)
                }
                
            } catch (error) {
                // console.log(error);
                setReview(true)
            }
        }
        getReviewQRDetails()
    }, [])
    return (
        <div>
            {review ?
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

export default ReviewQrInterfacePage