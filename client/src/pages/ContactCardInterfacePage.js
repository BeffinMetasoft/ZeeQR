import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../assests/zeeqr-black.svg'
import { addContactCardLocation, contactCardInterface } from '../api/UserRequest'
import axios from '../api/Axios'


function ContactCardInterfacePage() {
    const params = useParams()
    const [contact, setContact] = useState(false)

    useEffect(() => {
        const getContactDetails = async () => {
            try {
                const { data } = await contactCardInterface(params.id)
                // console.log(data);
                if (data.success) {
                    setContact(false)
                    const liveLocation = await axios.get('https://ipapi.co/json')
                    await addContactCardLocation(data.card._id, liveLocation.data)
                    
                    window.location.href = data?.card?.vCard

                } else {
                    setContact(true)
                }
            } catch (error) {
                console.log(error);
                setContact(true)
            }
        }
        getContactDetails()
    }, [])
    return (
        <div>
            {contact ?
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

export default ContactCardInterfacePage