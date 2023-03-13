import React from 'react'
import { GrDeliver } from "react-icons/gr";
import { Link, useLocation } from 'react-router-dom';
import Card from '../cards/Card';

function Success() {
  const location = useLocation()
    const cardDetails = location.state?.data
    console.log(cardDetails, 'update');
  return (
    <div>
         <h1 className='text-4xl text-center pt-[50px] font-bold uppercase'>Thank You</h1>
            <div className='pt-20 p-2'>
                <Card data={cardDetails} />
                <div className='flex justify-center mt-10'>
                <GrDeliver size={80}/>
                </div>
                <div>
                <h1 className='text-4xl text-center pt-2 font-bold uppercase'>Your smart card is on the way</h1>
                <p className='text-center text-xl mt-2'>Your smart card will reach you within 5-6 working days.</p>
                <p className='text-center text-xl mt-2 mb-5'>We will send the confirmation mail and traking id to your email address. </p>
                <div className='flex justify-center m-10 gap-3 py-5'>
                    <Link to={'/booked-cards'} className='inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black   bg-white hover:bg-black hover:text-white mt-4 lg:mt-0'>Booked Cards</Link>
                    <Link to={'/home'} className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white border-transparent  bg-black hover:bg-slate-800 transition mt-4 lg:mt-0'>Back To Home</Link>
                </div>
                </div>
            </div>
    </div>
  )
}

export default Success